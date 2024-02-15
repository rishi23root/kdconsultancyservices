import Script from "next/script";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section
      id="hero"
      className="d-flex align-items-center position-relative hero-section"
    >
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.min.js"
      ></Script>
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/controls/OrbitControls.js"
      ></Script>
      <Script
        defer
        src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"
      ></Script>
      <div id="canvas_container" className="zoom-in-mode"></div>

      <Script src="/assets/js/blobAnimation.js"></Script>

      <div
        className="container position-relative z-index-2 text-container"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-xl-6 mx-auto text-center">
            <h1>
              Innovative Solutions.
              <br />
              Strategic Results.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
