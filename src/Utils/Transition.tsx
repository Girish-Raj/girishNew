import React, { useRef, useEffect, useContext, ReactNode, ElementType } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

interface TransitionContextProps {
  parent: {
    show?: boolean;
    isInitialRender?: boolean;
    appear?: boolean;
  };
}

const TransitionContext = React.createContext<TransitionContextProps>({
  parent: {},
});

function useIsInitialRender(): boolean {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

interface CSSTransitionProps {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: ElementType;
  children: ReactNode;
  className?: string;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit = false,
  tag: Component = 'div',
  children,
  className = '',
  ...rest
}: CSSTransitionProps) {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  const addClasses = (node: HTMLElement, classes: string[]) => {
    classes.length && node.classList.add(...classes);
  };

  const removeClasses = (node: HTMLElement, classes: string[]) => {
    classes.length && node.classList.remove(...classes);
  };

  const nodeRef = React.useRef<HTMLElement>(null);

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: () => void) => {
        if (nodeRef.current) {
          nodeRef.current.addEventListener('transitionend', done, false);
        }
      }}
      onEnter={() => {
        if (nodeRef.current && !removeFromDom) nodeRef.current.style.display = '';
        addClasses(nodeRef.current!, [...enterClasses, ...enterStartClasses]);
      }}
      onEntering={() => {
        removeClasses(nodeRef.current!, enterStartClasses);
        addClasses(nodeRef.current!, enterEndClasses);
      }}
      onEntered={() => {
        removeClasses(nodeRef.current!, [...enterEndClasses, ...enterClasses]);
      }}
      onExit={() => {
        addClasses(nodeRef.current!, [...leaveClasses, ...leaveStartClasses]);
      }}
      onExiting={() => {
        removeClasses(nodeRef.current!, leaveStartClasses);
        addClasses(nodeRef.current!, leaveEndClasses);
      }}
      onExited={() => {
        removeClasses(nodeRef.current!, [...leaveEndClasses, ...leaveClasses]);
        if (nodeRef.current && !removeFromDom) nodeRef.current.style.display = 'none';
      }}
    >
      <Component
        ref={nodeRef}
        className={className}
        {...rest}
        style={{ display: !removeFromDom ? 'none' : undefined }}
      >
        {children}
      </Component>
    </ReactCSSTransition>
  );
}

interface TransitionProps extends Omit<CSSTransitionProps, 'show'> {
  show?: boolean;  // Optional in TransitionProps
}

function Transition({ show, appear, ...rest }: TransitionProps) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show!}  // `show` is guaranteed to be a boolean here
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show: show ?? false,  // Ensure `show` is never undefined
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show ?? false} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
