function ContactInfo({ hostname }: { hostname: string }) {
    return (
      <div>
        <p>
          If you have any questions, concerns, or feedback about our website or
          our policies, please don't hesitate to contact us:
        </p>
        <br />
        Email:
        <a
          className=" mx-2 text-blue-800 dark:text-blue-600"
          href="mailto: checkpointdb.live@gmail.com"
        >
          checkpointdb.live@gmail.com{" "}
        </a>
        <br />
        <p>
          We appreciate your support and hope you find our educational resources
          valuable. Thank you for visiting {hostname}.
        </p>
      </div>
    );
  }
  
  export default ContactInfo;
  