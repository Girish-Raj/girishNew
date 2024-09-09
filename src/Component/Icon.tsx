type Props = {
    id: string;
    classes?: string;
    height?: string;
    width?: string;
  };
  
  function Icon({ id, classes }: Props) {
    if (id === "LOCK") {
      return (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          className={classes || ""}
        >
          <g>
            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path>
          </g>
        </svg>
      );
    }
  
    if (id === "EYE") {
      return (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          className={classes || ""}
        >
          <g>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
          </g>
        </svg>
      );
    }
  
    if (id === "DROPDOWN") {
      return (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </g>
        </svg>
      );
    }
  
    if (id === "LOGO") {
      return <></>;
    }
  
    if (id === "DELETE") {
      return (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className={classes || ""}
        >
          <g>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
          </g>
        </svg>
      );
    }
  
    if (id === "EDIT") {
      return (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className={classes || ""}
        >
          <g>
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </g>
        </svg>
      );
    }
  
    if (id === "NOTES") {
      return (
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          className={classes || ""}
        >
          <g>
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path>
          </g>
        </svg>
      );
    }
  
    return <></>;
  }
  
  export default Icon;
  