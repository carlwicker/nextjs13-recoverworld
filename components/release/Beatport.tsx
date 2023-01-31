interface IBeatport {
  beatport: string;
}

export default function Beatport({ beatport }: IBeatport) {
  return (
    <a href={beatport} target="_blank" rel="noreferrer">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        viewBox="0 0 330 96.6"
        href="#"
        className="hover:cursor-pointer hover:text-red-600 transition duration-500 ease-out fill-white hover:fill-red-600"
      >
        <g>
          <g>
            <g>
              <path
                className="st0"
                d="M67.9,60c0,13.6-10.8,24.6-24.6,24.6c-13.6,0-24.4-10.7-24.4-24.6c0-6.5,2.5-12.3,6.4-16.6L8.7,60L0,51.2
             l18.7-18.5c2.5-2.5,3.8-5.8,3.8-9.5V0h12.3v23.3c0,7.1-2.5,13.2-7.5,18.1l-0.5,0.5c4.3-4,10.2-6.4,16.5-6.4
             C57.3,35.5,67.9,46.6,67.9,60 M56.8,60c0-7.3-6-13.2-13.4-13.2C35.9,46.8,30,53,30,60c0,7.2,5.9,13.3,13.3,13.3
             C51,73.3,56.8,67,56.8,60"
              />
              <path
                className="st0"
                d="M108.2,36.1c5.2,0,9.1,1.1,12,3.2c2.8,2.2,4.3,5.2,4.3,9c0,2.8-0.8,5.1-2.3,7c-1.5,1.8-3.7,3-6.5,3.7
             c7,1.2,10.6,4.9,10.6,11.1c0,4.1-1.5,7.3-4.5,9.6c-3,2.3-7.3,3.5-12.9,3.5H91v-47H108.2z M98.7,56h9.7c2.6,0,4.7-0.6,6.1-1.8
             c1.5-1.2,2.2-2.9,2.2-5c0-2.1-0.7-3.8-2.2-4.9c-1.5-1.2-3.5-1.8-6.1-1.8h-9.7V56z M98.7,76.6h10.2c3,0,5.4-0.6,7-1.8
             c1.6-1.2,2.5-2.9,2.5-5.1c0-2.3-0.8-4.1-2.5-5.3c-1.7-1.3-4-1.9-7-1.9H98.7V76.6z"
              />
              <path
                className="st0"
                d="M129.9,56.7c1.4-2.7,3.4-4.7,5.9-6.2c2.5-1.5,5.4-2.2,8.7-2.2c3.3,0,6.2,0.7,8.8,2c2.5,1.3,4.5,3.2,6,5.7
             c1.5,2.5,2.2,5.4,2.3,8.7c0,0.9-0.1,1.8-0.2,2.8h-25.9v0.4c0.2,3,1.1,5.4,2.8,7.1c1.7,1.7,4,2.6,6.8,2.6c2.2,0,4.1-0.5,5.6-1.6
             c1.5-1.1,2.5-2.5,3-4.5h7.3c-0.6,3.5-2.3,6.4-5.1,8.6c-2.8,2.2-6.2,3.4-10.3,3.4c-3.6,0-6.7-0.7-9.4-2.2
             c-2.7-1.5-4.7-3.5-6.2-6.1c-1.5-2.6-2.2-5.7-2.2-9.2C127.8,62.5,128.5,59.4,129.9,56.7 M154.1,62.2c-0.3-2.5-1.3-4.5-3-5.9
             c-1.7-1.4-3.8-2.1-6.4-2.1c-2.4,0-4.4,0.7-6.1,2.2c-1.7,1.5-2.7,3.4-3,5.8H154.1z"
              />
              <path
                className="st0"
                d="M196.7,76.8v6.3h-3.8c-2.2,0-3.9-0.5-4.8-1.4c-1-0.9-1.5-2.3-1.5-4.1c-2.6,3.9-6.4,5.9-11.4,5.9
             c-3.9,0-6.9-0.9-9.3-2.7c-2.3-1.8-3.5-4.3-3.5-7.4c0-3.5,1.3-6.3,3.8-8.2c2.5-1.9,6.2-2.9,11-2.9h8.7v-2.1c0-1.9-0.7-3.4-2-4.5
             c-1.3-1.1-3.2-1.6-5.6-1.6c-2.1,0-3.8,0.5-5.2,1.4c-1.4,0.9-2.2,2.1-2.5,3.7h-7.1c0.4-3.4,1.9-6.1,4.6-8
             c2.7-1.9,6.2-2.9,10.6-2.9c4.6,0,8.2,1.1,10.7,3.2c2.5,2.2,3.8,5.2,3.8,9.3v13.6c0,1.6,0.8,2.4,2.3,2.4H196.7z M185.8,67.8h-9
             c-2.2,0-4,0.4-5.2,1.3c-1.2,0.9-1.8,2.2-1.8,3.9c0,1.5,0.6,2.7,1.7,3.6c1.1,0.9,2.7,1.3,4.7,1.3c3,0,5.3-0.8,7-2.4
             c1.7-1.6,2.5-3.8,2.6-6.5V67.8z"
              />
              <path
                className="st0"
                d="M199.5,55.1h-6v-6.4h6v-9.6h7.3v9.6h8.3v6.4h-8.3V73c0,1.3,0.3,2.3,0.8,2.9c0.5,0.6,1.5,0.8,2.8,0.8h5.5v6.4
             h-7c-3.3,0-5.7-0.8-7.2-2.3c-1.5-1.5-2.3-3.9-2.3-7.1V55.1z"
              />
              <path
                className="st0"
                d="M244.7,50.4c2.5,1.4,4.4,3.5,5.8,6.1c1.4,2.7,2.1,5.8,2.1,9.4c0,3.5-0.7,6.6-2.1,9.2
             c-1.4,2.7-3.3,4.7-5.8,6.2c-2.5,1.5-5.3,2.2-8.4,2.2c-2.6,0-4.8-0.5-6.7-1.4c-1.9-0.9-3.4-2.2-4.5-3.8v18.3h-7.3V48.7h6.3
             l0.9,5.1c2.8-3.7,6.5-5.5,11.2-5.5C239.4,48.3,242.2,49,244.7,50.4 M242.3,74.2c1.9-2.2,2.8-4.9,2.8-8.3c0-3.4-0.9-6.2-2.8-8.3
             c-1.9-2.1-4.3-3.2-7.3-3.2c-3,0-5.4,1-7.3,3.1c-1.8,2.1-2.8,4.8-2.8,8.2c0,3.5,0.9,6.2,2.8,8.4c1.8,2.2,4.3,3.2,7.3,3.2
             C238.1,77.4,240.5,76.3,242.3,74.2"
              />
              <path
                className="st0"
                d="M263.1,81.3c-2.7-1.5-4.7-3.5-6.2-6.2c-1.5-2.7-2.2-5.7-2.2-9.2c0-3.4,0.7-6.5,2.2-9.2
             c1.5-2.7,3.5-4.7,6.2-6.2c2.7-1.5,5.7-2.2,9.2-2.2c3.4,0,6.5,0.7,9.2,2.2c2.7,1.5,4.7,3.6,6.2,6.2c1.5,2.7,2.2,5.7,2.2,9.2
             c0,3.5-0.7,6.6-2.2,9.2c-1.5,2.7-3.5,4.7-6.2,6.2c-2.7,1.5-5.7,2.2-9.2,2.2C268.8,83.5,265.8,82.8,263.1,81.3 M279.6,74.2
             c1.9-2.1,2.8-4.9,2.8-8.2s-0.9-6.1-2.8-8.2c-1.9-2.1-4.3-3.2-7.4-3.2c-3,0-5.5,1.1-7.3,3.2c-1.8,2.1-2.8,4.9-2.8,8.2
             s0.9,6.1,2.8,8.2c1.8,2.1,4.3,3.2,7.3,3.2C275.3,77.3,277.8,76.3,279.6,74.2"
              />
              <path
                className="st0"
                d="M311.3,48.7v6.8h-3.2c-3,0-5.2,1-6.5,2.9c-1.3,1.9-2,4.4-2,7.4v17.3h-7.3V48.7h6.5l0.8,5.2
             c1-1.6,2.3-2.9,3.8-3.8c1.6-0.9,3.7-1.4,6.3-1.4H311.3z"
              />
              <path
                className="st0"
                d="M313.7,39.1h7.3v9.6h8.3v6.4h-8.3V73c0,1.3,0.3,2.3,0.8,2.9c0.5,0.6,1.5,0.8,2.8,0.8h5.5v6.4h-7
             c-3.3,0-5.6-0.8-7.1-2.3c-1.5-1.5-2.2-3.9-2.2-7.1V39.1z"
              />
            </g>
          </g>
        </g>
      </svg>
    </a>
  );
}
