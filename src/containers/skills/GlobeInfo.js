import React, { Component } from "react";

class GlobeInfo extends Component {
  render() {
    return (
      <svg
        width="1120"
        height="829.80067"
        viewBox="0 0 1120 829.80067"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="soft-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow
              dx="4"
              dy="12"
              stdDeviation="16"
              floodColor="#001c55"
              floodOpacity="0.08"
            />
          </filter>
          <filter id="light-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="#001c55"
              floodOpacity="0.05"
            />
          </filter>
          <linearGradient
            id="globe-base"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#EBF1FA" />
          </linearGradient>
          <linearGradient
            id="map-panel-light"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#F2F6FC" />
          </linearGradient>
          <linearGradient
            id="map-panel-mid"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F2F6FC" />
            <stop offset="100%" stopColor="#E2EBF8" />
          </linearGradient>
          <clipPath id="globe-clip">
            <circle cx="270" cy="300" r="150" />
          </clipPath>
        </defs>

        <circle cx="355" cy="335" r="290" fill="#F8FAFD" />
        <circle cx="480" cy="220" r="160" fill="#F0F5FA" />
        <path
          d="M 120 480 Q 200 600 380 550 Q 500 500 550 620"
          fill="none"
          stroke="#E2EBF8"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <g stroke="#A8C1E8" strokeWidth="3" strokeLinecap="round">
          <line x1="100" y1="120" x2="100" y2="136" />
          <line x1="92" y1="128" x2="108" y2="128" />
          <line x1="620" y1="520" x2="620" y2="536" />
          <line x1="612" y1="528" x2="628" y2="528" />
        </g>
        <circle cx="150" cy="550" r="6" fill="#A8C1E8" />
        <circle cx="580" cy="120" r="4" fill="#4B73B8" />
        <circle cx="650" cy="300" r="8" fill="none" stroke="#A8C1E8" strokeWidth="3" />

        <g strokeLinecap="round" strokeLinejoin="round">
          <g filter="url(#soft-shadow)">
            <path
              d="M 140 460 L 290 390 L 290 190 L 140 260 Z"
              fill="url(#map-panel-mid)"
              stroke="#001c55"
              strokeWidth="4"
            />
            <path
              d="M 180 380 L 220 330 L 260 360 L 290 310"
              fill="none"
              stroke="#A8C1E8"
              strokeWidth="4"
            />
            <circle cx="180" cy="380" r="5" fill="#001c55" />
            <circle
              cx="260"
              cy="360"
              r="4"
              fill="#ffffff"
              stroke="#001c55"
              strokeWidth="3"
            />

            <path
              d="M 290 390 L 460 440 L 460 240 L 290 190 Z"
              fill="url(#map-panel-light)"
              stroke="#001c55"
              strokeWidth="4"
            />
            <path
              d="M 290 310 L 340 370 L 400 320 L 440 380"
              fill="none"
              stroke="#4B73B8"
              strokeWidth="5"
            />
            <path
              d="M 320 230 C 350 250 380 230 420 260"
              fill="none"
              stroke="#D1E0F5"
              strokeWidth="2"
            />
            <path
              d="M 310 250 C 340 270 390 250 430 280"
              fill="none"
              stroke="#D1E0F5"
              strokeWidth="2"
            />

            <path
              d="M 460 440 L 590 370 L 590 170 L 460 240 Z"
              fill="url(#map-panel-mid)"
              stroke="#001c55"
              strokeWidth="4"
            />
            <path
              d="M 460 350 L 510 320 L 550 380"
              fill="none"
              stroke="#A8C1E8"
              strokeWidth="4"
            />
            <circle cx="550" cy="380" r="5" fill="#4B73B8" />
          </g>

          <g filter="url(#light-shadow)">
            <path
              d="M 430 280 L 530 230 L 630 280 L 530 330 Z"
              fill="#EBF1FA"
              stroke="#001c55"
              strokeWidth="3"
            />
            <path
              d="M 430 240 L 530 190 L 630 240 L 530 290 Z"
              fill="#A8C1E8"
              stroke="#001c55"
              strokeWidth="3"
            />
            <path
              d="M 430 200 L 530 150 L 630 200 L 530 250 Z"
              fill="#4B73B8"
              stroke="#001c55"
              strokeWidth="3"
            />
            <line
              x1="530"
              y1="130"
              x2="530"
              y2="350"
              stroke="#001c55"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            <circle
              cx="530"
              cy="150"
              r="6"
              fill="#ffffff"
              stroke="#001c55"
              strokeWidth="3"
            />
            <circle cx="530" cy="200" r="4" fill="#001c55" />
            <circle cx="530" cy="240" r="4" fill="#001c55" />
          </g>

          <g filter="url(#soft-shadow)">
            <circle
              cx="270"
              cy="300"
              r="150"
              fill="url(#globe-base)"
              stroke="#001c55"
              strokeWidth="5"
            />
            <g clipPath="url(#globe-clip)">
              <g stroke="#A8C1E8" strokeWidth="2.5" fill="none">
                <ellipse cx="270" cy="300" rx="75" ry="150" />
                <ellipse cx="270" cy="300" rx="130" ry="150" />
                <line x1="270" y1="150" x2="270" y2="450" />
                <ellipse cx="270" cy="300" rx="150" ry="40" />
                <ellipse cx="270" cy="225" rx="135" ry="30" />
                <ellipse cx="270" cy="375" rx="135" ry="30" />
              </g>
              <path
                d="M 150 200 C 180 150 240 160 260 210 C 280 260 240 310 190 290 C 140 270 120 250 150 200 Z"
                fill="#001c55"
              />
              <path
                d="M 180 330 C 210 310 260 330 250 380 C 240 430 190 410 180 370 C 170 350 160 340 180 330 Z"
                fill="#4B73B8"
              />
              <path
                d="M 330 170 C 400 160 420 230 380 290 C 340 350 290 320 290 260 C 290 200 300 180 330 170 Z"
                fill="#001c55"
              />
              <path
                d="M 350 360 C 370 350 390 370 370 390 C 350 400 340 370 350 360 Z"
                fill="#4B73B8"
              />
            </g>
            <path
              d="M 140 220 A 130 130 0 0 1 270 170 A 135 135 0 0 0 145 280 Z"
              fill="#ffffff"
              opacity="0.6"
            />
            <circle
              cx="270"
              cy="300"
              r="150"
              fill="none"
              stroke="#001c55"
              strokeWidth="5"
            />
          </g>

          <path
            d="M 230 140 C 300 30 480 50 550 130"
            fill="none"
            stroke="#001c55"
            strokeWidth="4"
            strokeDasharray="8 8"
          />
          <path
            d="M 120 250 C 40 380 250 520 400 420"
            fill="none"
            stroke="#4B73B8"
            strokeWidth="4"
          />
          <circle cx="400" cy="420" r="8" fill="#ffffff" stroke="#001c55" strokeWidth="4" />
          <path
            d="M 410 220 Q 460 180 500 220"
            fill="none"
            stroke="#A8C1E8"
            strokeWidth="3"
          />

          <g filter="url(#light-shadow)">
            <path
              d="M 540 120 C 580 120 610 140 610 165 C 610 190 580 210 540 210 L 520 225 L 530 205 C 510 195 490 180 490 165 C 490 140 510 120 540 120 Z"
              fill="#ffffff"
              stroke="#001c55"
              strokeWidth="4"
            />
            <line
              x1="520"
              y1="155"
              x2="580"
              y2="155"
              stroke="#4B73B8"
              strokeWidth="4"
            />
            <line
              x1="520"
              y1="175"
              x2="560"
              y2="175"
              stroke="#4B73B8"
              strokeWidth="4"
            />
            <path
              d="M 600 170 C 630 170 650 185 650 205 C 650 225 630 240 600 240 L 585 255 L 590 238 C 575 232 565 220 565 205 C 565 185 580 170 600 170 Z"
              fill="#4B73B8"
              stroke="#001c55"
              strokeWidth="4"
            />
            <circle cx="588" cy="205" r="3" fill="#ffffff" />
            <circle cx="600" cy="205" r="3" fill="#ffffff" />
            <circle cx="612" cy="205" r="3" fill="#ffffff" />
          </g>

          <g filter="url(#soft-shadow)">
            <path
              d="M 400 320 C 420 320 435 335 435 355 C 435 385 400 430 400 430 C 400 430 365 385 365 355 C 365 335 380 320 400 320 Z"
              fill="#001c55"
              stroke="#ffffff"
              strokeWidth="4"
            />
            <circle cx="400" cy="355" r="10" fill="#ffffff" />
          </g>

          <g>
            <path
              d="M 220 170 C 235 170 245 180 245 195 C 245 215 220 250 220 250 C 220 250 195 215 195 195 C 195 180 205 170 220 170 Z"
              fill="#ffffff"
              stroke="#001c55"
              strokeWidth="3"
            />
            <circle cx="220" cy="195" r="6" fill="#4B73B8" />
          </g>

          <g>
            <path
              d="M 630 160 C 642 160 652 170 652 182 C 652 200 630 220 630 220 C 630 220 608 200 608 182 C 608 170 618 160 630 160 Z"
              fill="#4B73B8"
              stroke="#001c55"
              strokeWidth="3"
            />
            <circle cx="630" cy="182" r="5" fill="#ffffff" />
          </g>

          <rect
            x="100"
            y="320"
            width="40"
            height="24"
            rx="6"
            fill="#ffffff"
            stroke="#001c55"
            strokeWidth="3"
          />
          <circle cx="112" cy="332" r="3" fill="#4B73B8" />
          <line
            x1="120"
            y1="332"
            x2="132"
            y2="332"
            stroke="#4B73B8"
            strokeWidth="2"
          />

          <rect
            x="520"
            y="440"
            width="50"
            height="28"
            rx="8"
            fill="#ffffff"
            stroke="#001c55"
            strokeWidth="3"
          />
          <circle cx="535" cy="454" r="4" fill="#A8C1E8" />
          <line
            x1="545"
            y1="450"
            x2="560"
            y2="450"
            stroke="#001c55"
            strokeWidth="3"
          />
          <line
            x1="545"
            y1="458"
            x2="555"
            y2="458"
            stroke="#A8C1E8"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  }
}

export default GlobeInfo;
