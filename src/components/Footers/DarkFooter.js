/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},
          
          A product by{" "}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Khutso Kenneth Baloyi
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
