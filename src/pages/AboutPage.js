import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          lacinia quis libero sit amet accumsan. Curabitur tempor ornare erat,
          nec commodo lectus pellentesque vitae. Duis justo mauris, sodales vel
          urna sit amet, molestie tempus leo. Donec iaculis dolor sed felis
          porttitor varius. Duis gravida nisi nec quam lacinia tincidunt. Etiam
          id ullamcorper urna. Aliquam ornare consequat interdum. Quisque ornare
          est et molestie laoreet. Vestibulum congue in ex in faucibus.
          Suspendisse interdum massa hendrerit ultrices placerat. Aliquam erat
          volutpat. Etiam consectetur facilisis lectus, sit amet dictum ex
          auctor a.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
