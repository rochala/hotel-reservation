import React, { useEffect, useState } from "react";
import '../SvgMap.css';
const rooms = 10;

function setUpSvgMap(data, makeState){
  for (var i = 1; i <= rooms; i++){
      let room_id = "room"+i;
      let room = document.getElementById(room_id+"_hover");

      if(data.includes(i)) {
        room.onclick = null
        room.classList.add("rooms_disabled");
        room.classList.remove("rooms_active");
      }
      else {
        room.onclick = () => makeState(room_id);
        room.classList.add("rooms_active");
        room.classList.remove("rooms_disabled");
      }
  }
}

function SvgMap(props) {
  useEffect(() => {
    setUpSvgMap(props.rooms, props.makeState);
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      version="1.1"
      viewBox="0 0 320 220"
    >
      <g
        id="layer3"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
      >
        <rect
          id="rect856"
          width="300"
          height="200"
          x="9.658"
          y="8.668"
          fill="#ccc"
          stroke="#000"
          strokeOpacity="0.378"
          strokeWidth="0.845"
          paintOrder="normal"
          ry="0"
        ></rect>
        <path
          id="rect945-7" fill="#ff2ad4" fillOpacity="1"
          stroke="#f36"
          strokeOpacity="0"
          strokeWidth="0.561"
          d="M8.667 -100.175H10.667V-84.175H8.667z"
          display="inline"
          paintOrder="normal"
          transform="rotate(90)"
        ></path>
        <path
          id="rect945-7-7"
          fill="#ff2ad4"
          fillOpacity="1"
          stroke="#f36"
          strokeOpacity="0"
          strokeWidth="0.561"
          d="M206.805 -100.196H208.805V-84.196H206.805z"
          display="inline"
          paintOrder="normal"
          transform="rotate(90)"
        ></path>
        <path
          id="rect945-7-73"
          fill="#ff2ad4"
          fillOpacity="1"
          stroke="#f36"
          strokeOpacity="0"
          strokeWidth="1.265"
          d="M-310.252 16.626H-308.252V94.626H-310.252z"
          display="inline"
          paintOrder="normal"
          transform="scale(-1 1)"
        ></path>
        <path
          id="rect945-7-73-0"
          fill="#ff2ad4"
          fillOpacity="1"
          stroke="#f36"
          strokeOpacity="0"
          strokeWidth="1.278"
          d="M-310.33 120.04H-308.33V200.04000000000002H-310.33z"
          display="inline"
          paintOrder="normal"
          transform="scale(-1 1)"
        ></path>
        <g
          id="g1473"
          fill="#217821"
          fillOpacity="1"
          stroke="#0083b4"
          strokeOpacity="0.598"
          strokeWidth="5.292"
          paintOrder="stroke markers fill"
          transform="translate(82.614 -9.151)"
        >
          <path id="rect1438" d="M24.792 102.91H206.792V128.91H24.792z"></path>
          <path
            id="rect1438-9"
            d="M26.534 -216.081H208.534V-190.081H26.534z"
            display="inline"
            transform="rotate(90)"
          ></path>
        </g>
      </g>
      <g id="layer2" display="inline" transform="translate(76.566 -8.773)">
        <g
          id="room1"
          display="inline"
          transform="matrix(.88045 0 0 .8933 -7.59 139.86)"
        >
          <rect
            id="room1_bg"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <path
            id="rect945-3-8"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.429"
            d="M16.232 19.636H17.232V34.635999999999996H16.232z"
            paintOrder="normal"
          ></path>
          <g id="g1570">
            <path
              id="rect1534"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g298"
              fill="#000"
              transform="matrix(.5118 0 0 .50444 -6.23 59.36)"
            >
              <g id="g274">
                <path id="rect272" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g282">
                <g id="g280">
                  <circle id="circle276" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path278"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <g id="g1608">
            <path
              id="rect1541"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g343"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g325">
                <path id="path323" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g329">
                <path
                  id="path327"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g1615">
            <path
              id="rect1567"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.169"
              d="M-64.653 61.374H-57.653000000000006V79.374H-64.653z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g371"
              fill="#000"
              transform="matrix(.24205 0 0 .23856 -64.128 67.45)"
            >
              <path id="path357" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path359"
                d="M9 9.85v8l7-4zm12-4h-7.58l3.29-3.29-.71-.71-4 4h-.03l-4-4-.69.71 3.28 3.29H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14H3v-12h18z"
              ></path>
            </g>
          </g>
          <path
            id="rect945-3-8-9"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.429"
            d="M-67.862 38.899H-66.862V53.899H-67.862z"
            display="inline"
            paintOrder="normal"
          ></path>
          <g id="g381">
            <path
              id="rect373"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-18.404V66.726H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g379"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path375" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path377"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <rect
            id="room1_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room2"
          display="inline"
          transform="matrix(.88138 0 0 -.49968 -7.524 164.791)"
        >
          <rect
            id="room2_bg"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <path
            id="rect521"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.429"
            d="M-67.889 51.087H-66.889V66.087H-67.889z"
            display="inline"
            paintOrder="normal"
          ></path>
          <g id="g468" transform="matrix(.52242 0 0 -1.0372 -45.755 106.752)">
            <path
              id="rect456"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g466"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g460">
                <path id="path458" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g464">
                <path
                  id="path462"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g445" transform="matrix(1.0029 0 0 -.7401 -.134 82.33)">
            <path
              id="rect429"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g443"
              fill="#000"
              transform="matrix(.47622 0 0 .90207 -5.453 56.299)"
            >
              <g id="g433">
                <path id="rect431" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g441">
                <g id="g439">
                  <circle id="circle435" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path437"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <path
            id="rect1293-9"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.614"
            d="M16.086 53.831H17.086V85.831H16.086z"
            paintOrder="normal"
          ></path>
          <g
            id="g381-4"
            display="inline"
            transform="matrix(.80224 0 0 -1.5052 -13.328 114.01)"
          >
            <path
              id="rect373-2"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-18.404V66.726H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g379-5"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path375-4" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path377-6"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <g
            id="g468-2"
            display="inline"
            transform="matrix(.52242 0 0 -1.0372 -8.72 106.925)"
          >
            <path
              id="rect456-2"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g466-5"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g460-1">
                <path id="path458-9" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g464-2">
                <path
                  id="path462-6"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <rect
            id="room2_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room3"
          display="inline"
          transform="matrix(.88138 0 0 -.49968 -7.625 130.166)"
        >
          <rect
            id="rect524"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <path
            id="rect526"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.429"
            d="M-67.889 51.087H-66.889V66.087H-67.889z"
            display="inline"
            paintOrder="normal"
          ></path>
          <g id="g540" transform="matrix(.52242 0 0 -1.0372 -45.755 106.752)">
            <path
              id="rect528"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g538"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g532">
                <path id="path530" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g536">
                <path
                  id="path534"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g558" transform="matrix(1.0029 0 0 -.7401 -.134 82.33)">
            <path
              id="rect542"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g556"
              fill="#000"
              transform="matrix(.47622 0 0 .90207 -5.453 56.299)"
            >
              <g id="g546">
                <path id="rect544" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g554">
                <g id="g552">
                  <circle id="circle548" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path550"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <path
            id="rect560"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.614"
            d="M16.086 53.831H17.086V85.831H16.086z"
            paintOrder="normal"
          ></path>
          <g
            id="g570"
            display="inline"
            transform="matrix(.80224 0 0 -1.5052 -13.328 114.01)"
          >
            <path
              id="rect562"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-18.404V66.726H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g568"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path564" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path566"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <g
            id="g584"
            display="inline"
            transform="matrix(.52242 0 0 -1.0372 -8.72 106.925)"
          >
            <path
              id="rect572"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g582"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g576">
                <path id="path574" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g580">
                <path
                  id="path578"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <rect
            id="room3_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room4"
          display="inline"
          transform="matrix(.88045 0 0 1.0119 -7.61 -.672)"
        >
          <rect
            id="rect615"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <path
            id="rect617"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.429"
            d="M16.076 24.451H17.076V39.451H16.076z"
            paintOrder="normal"
          ></path>
          <g id="g635">
            <path
              id="rect619"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g633"
              fill="#000"
              transform="matrix(.5118 0 0 .50444 -6.23 59.36)"
            >
              <g id="g623">
                <path id="rect621" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g631">
                <g id="g629">
                  <circle id="circle625" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path627"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <g id="g649">
            <path
              id="rect637"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g647"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g641">
                <path id="path639" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g645">
                <path
                  id="path643"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g659">
            <path
              id="rect651"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-18.404V66.726H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g657"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path653" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path655"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <g id="g669">
            <path
              id="rect661"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.169"
              d="M-64.653 61.374H-57.653000000000006V79.374H-64.653z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g667"
              fill="#000"
              transform="matrix(.24205 0 0 .23856 -64.128 67.45)"
            >
              <path id="path663" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path665"
                d="M9 9.85v8l7-4zm12-4h-7.58l3.29-3.29-.71-.71-4 4h-.03l-4-4-.69.71 3.28 3.29H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14H3v-12h18z"
              ></path>
            </g>
          </g>
          <path
            id="rect671"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.429"
            d="M-67.862 38.899H-66.862V53.899H-67.862z"
            display="inline"
            paintOrder="normal"
          ></path>
          <g id="g681">
            <path
              id="rect673"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-18.404V66.726H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g679"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path675" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path677"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <rect
            id="room4_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room5"
          display="inline"
          transform="matrix(-.66724 0 0 -.45345 34.902 194.388)"
        >
          <rect
            id="rect1291-0"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <g
            id="g743"
            transform="matrix(-1.04349 0 0 -1.05496 -122.711 142.205)"
          >
            <path
              id="rect735"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.169"
              d="M-64.653 61.374H-57.653000000000006V79.374H-64.653z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g741"
              fill="#000"
              transform="matrix(.24205 0 0 .23856 -64.128 67.45)"
            >
              <path id="path737" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path739"
                d="M9 9.85v8l7-4zm12-4h-7.58l3.29-3.29-.71-.71-4 4h-.03l-4-4-.69.71 3.28 3.29H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14H3v-12h18z"
              ></path>
            </g>
          </g>
          <g
            id="g724"
            display="inline"
            transform="matrix(.73692 0 0 -1.16741 -13.65 149.602)"
          >
            <path
              id="rect712"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g722"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g716">
                <path id="path714" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g720">
                <path
                  id="path718"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g701" transform="matrix(-1.24535 0 0 -.9244 -4.729 126.625)">
            <path
              id="rect685"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g699"
              fill="#000"
              transform="matrix(.47622 0 0 .90207 -5.453 56.299)"
            >
              <g id="g689">
                <path id="rect687" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g697">
                <g id="g695">
                  <circle id="circle691" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path693"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <path
            id="rect1293-2"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.5"
            d="M16.086 21.511H17.086V40.510999999999996H16.086z"
            paintOrder="normal"
          ></path>
          <rect
            id="room5_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room6"
          display="inline"
          transform="matrix(-.66724 0 0 -.45345 34.902 225.754)"
        >
          <rect
            id="rect1291"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <path
            id="rect813"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.523"
            d="M-19.347 46.947H-18.347V62.947H-19.347z"
            display="inline"
            paintOrder="normal"
            transform="matrix(0 -1 -1 0 0 0)"
          ></path>
          <g
            id="g806"
            transform="matrix(-1.04349 0 0 -1.05496 -123.534 114.356)"
          >
            <path
              id="rect798"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.169"
              d="M-64.653 61.374H-57.653000000000006V79.374H-64.653z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g804"
              fill="#000"
              transform="matrix(.24205 0 0 .23856 -64.128 67.45)"
            >
              <path id="path800" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path802"
                d="M9 9.85v8l7-4zm12-4h-7.58l3.29-3.29-.71-.71-4 4h-.03l-4-4-.69.71 3.28 3.29H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14H3v-12h18z"
              ></path>
            </g>
          </g>
          <g
            id="g789"
            display="inline"
            transform="matrix(.73692 0 0 -1.16741 -14.473 120.542)"
          >
            <path
              id="rect777"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g787"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g781">
                <path id="path779" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g785">
                <path
                  id="path783"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g766" transform="matrix(-1.24535 0 0 -.9244 -4.637 98.38)">
            <path
              id="rect750"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g764"
              fill="#000"
              transform="matrix(.47622 0 0 .90207 -5.453 56.299)"
            >
              <g id="g754">
                <path id="rect752" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g762">
                <g id="g760">
                  <circle id="circle756" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path758"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <path
            id="rect1293"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.533"
            d="M16.032 59.67H17.032V82.67H16.032z"
            paintOrder="normal"
          ></path>
          <rect
            id="room6_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room7"
          display="inline"
          transform="matrix(.89737 0 0 .82203 159.962 140.15)"
        >
          <rect
            id="rect858-8-4-6-72-4"
            width="84"
            height="76.362"
            x="-89.252"
            y="17.95"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.888"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <g id="g956" transform="translate(-47.991 -36.371)">
            <path
              id="rect944"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g954"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g948">
                <path id="path946" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g952">
                <path
                  id="path950"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <path
            id="rect941"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.554"
            d="M-94.529 18.415H-92.692V36.304H-94.529z"
            display="inline"
            paintOrder="normal"
            transform="matrix(0 -1 -1 0 0 0)"
          ></path>
          <g id="g930" transform="translate(-21.85 -24.91)">
            <path
              id="rect914"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g928"
              fill="#000"
              transform="matrix(.5118 0 0 .50444 -6.23 59.36)"
            >
              <g id="g918">
                <path id="rect916" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g926">
                <g id="g924">
                  <circle id="circle920" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path922"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <g id="g907" transform="translate(-21.857 63.858)">
            <path
              id="rect899"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-17.899V67.394H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g905"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path901" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path903"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <path
            id="rect945-2-9-5-1-3"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.492"
            d="M4.439 -89.599H5.817V-70.778H4.439z"
            paintOrder="normal"
            transform="scale(-1)"
          ></path>
          <g id="g977" transform="translate(-22.898 -36.371)">
            <path
              id="rect965"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g975"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g969">
                <path id="path967" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g973">
                <path
                  id="path971"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <rect
            id="room7_hover"
            width="84"
            height="76.362"
            x="-89.252"
            y="17.95"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.888"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room8"
          display="inline"
          transform="matrix(.89737 0 0 .82203 159.943 2.684)"
        >
          <rect
            id="rect979"
            width="84"
            height="76.362"
            x="-89.252"
            y="17.95"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.888"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <g id="g993" transform="translate(-47.991 -36.371)">
            <path
              id="rect981"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g991"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g985">
                <path id="path983" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g989">
                <path
                  id="path987"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <path
            id="rect995"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.639"
            d="M-19.221 52.768H-17.384V76.533H-19.221z"
            display="inline"
            paintOrder="normal"
            transform="matrix(0 -1 -1 0 0 0)"
          ></path>
          <g id="g1013" transform="translate(-21.85 -24.91)">
            <path
              id="rect997"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g1011"
              fill="#000"
              transform="matrix(.5118 0 0 .50444 -6.23 59.36)"
            >
              <g id="g1001">
                <path id="rect999" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g1009">
                <g id="g1007">
                  <circle id="circle1003" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path1005"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <g id="g1023" transform="translate(-21.857 63.858)">
            <path
              id="rect1015"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.574"
              d="M-30.404 17.726H-17.899V67.394H-30.404z"
              display="inline"
              paintOrder="stroke markers fill"
              transform="matrix(0 -1 -1 0 0 0)"
            ></path>
            <g
              id="g1021"
              fill="#000"
              transform="matrix(.42223 0 0 .37541 -47.562 19.705)"
            >
              <path id="path1017" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path1019"
                d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12zm0-11H6V4h12z"
              ></path>
            </g>
          </g>
          <path
            id="rect1025"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.492"
            d="M4.439 -89.599H5.817V-70.778H4.439z"
            paintOrder="normal"
            transform="scale(-1)"
          ></path>
          <g id="g1039" transform="translate(-22.898 -36.371)">
            <path
              id="rect1027"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g1037"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g1031">
                <path id="path1029" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g1035">
                <path
                  id="path1033"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <rect
            id="room8_hover"
            width="84"
            height="76.362"
            x="-89.252"
            y="17.95"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.888"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room9"
          display="inline"
          transform="matrix(-.66724 0 0 -.45345 34.883 56.922)"
        >
          <rect
            id="rect1291-8"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <path
            id="rect813-2"
            fill="#0ff"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.647"
            d="M-87.842 36.755H-86.842V62.249H-87.842z"
            display="inline"
            paintOrder="normal"
            transform="matrix(0 -1 -1 0 0 0)"
          ></path>
          <g
            id="g806-5"
            transform="matrix(-1.04349 0 0 -1.05496 -122.88 114.356)"
          >
            <path
              id="rect798-5"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.169"
              d="M-64.653 61.374H-57.653000000000006V79.374H-64.653z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g804-4"
              fill="#000"
              transform="matrix(.24205 0 0 .23856 -64.128 67.45)"
            >
              <path id="path800-1" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path802-0"
                d="M9 9.85v8l7-4zm12-4h-7.58l3.29-3.29-.71-.71-4 4h-.03l-4-4-.69.71 3.28 3.29H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14H3v-12h18z"
              ></path>
            </g>
          </g>
          <g
            id="g789-8"
            display="inline"
            transform="matrix(.73692 0 0 -1.16741 -14.473 120.542)"
          >
            <path
              id="rect777-7"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g787-3"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g781-0">
                <path id="path779-5" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g785-8">
                <path
                  id="path783-1"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g766-0" transform="matrix(-1.24535 0 0 -.9244 -4.637 98.38)">
            <path
              id="rect750-2"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g764-7"
              fill="#000"
              transform="matrix(.47622 0 0 .90207 -5.453 56.299)"
            >
              <g id="g754-9">
                <path id="rect752-5" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g762-7">
                <g id="g760-1">
                  <circle id="circle756-6" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path758-7"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <path
            id="rect1293-3"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.533"
            d="M16.032 59.67H17.032V82.67H16.032z"
            paintOrder="normal"
          ></path>
          <rect
            id="room9_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
        <g
          id="room10"
          display="inline"
          transform="matrix(-.66724 0 0 -.45345 34.883 88.328)"
        >
          <rect
            id="rect1207"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms_bg"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
          <g
            id="g1217"
            transform="matrix(-1.04349 0 0 -1.05496 -122.711 142.205)"
          >
            <path
              id="rect1209"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.169"
              d="M-64.653 61.374H-57.653000000000006V79.374H-64.653z"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g1215"
              fill="#000"
              transform="matrix(.24205 0 0 .23856 -64.128 67.45)"
            >
              <path id="path1211" fill="none" d="M0 0h24v24H0z"></path>
              <path
                id="path1213"
                d="M9 9.85v8l7-4zm12-4h-7.58l3.29-3.29-.71-.71-4 4h-.03l-4-4-.69.71 3.28 3.29H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14H3v-12h18z"
                opacity="0.7"
              ></path>
            </g>
          </g>
          <g
            id="g1231"
            display="inline"
            transform="matrix(.73692 0 0 -1.16741 -14.523 149.816)"
          >
            <path
              id="rect1219"
              fill="#f9f9f9"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.676"
              d="M-38.34 57.628H-21.340000000000003V83.628H-38.34z"
              opacity="1"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g1229"
              fill="#000"
              transform="matrix(.40444 0 0 .41143 -34.35 65.886)"
            >
              <g id="g1223">
                <path id="path1221" fill="none" d="M0 0h24v24H0z"></path>
              </g>
              <g id="g1227">
                <path
                  id="path1225"
                  d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2z"
                ></path>
              </g>
            </g>
          </g>
          <g id="g1249" transform="matrix(-1.24535 0 0 -.9244 -4.729 126.625)">
            <path
              id="rect1233"
              fill="#ffd"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0.895"
              d="M-17.29 42.859H16.71V86.85900000000001H-17.29z"
              opacity="1"
              paintOrder="stroke markers fill"
            ></path>
            <g
              id="g1247"
              fill="#000"
              transform="matrix(.47622 0 0 .90207 -5.453 56.299)"
            >
              <g id="g1237">
                <path id="rect1235" fill="none" d="M0 0H24V24H0z"></path>
              </g>
              <g id="g1245">
                <g id="g1243">
                  <circle id="circle1239" cx="7" cy="7" r="2"></circle>
                  <path
                    id="path1241"
                    d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 011.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 005 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6zm0 6H4v-4h16z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
          <path
            id="rect1251"
            fill="#f36"
            fillOpacity="1"
            stroke="#f36"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.5"
            d="M16.086 21.511H17.086V40.510999999999996H16.086z"
            paintOrder="normal"
          ></path>
          <rect
            id="room10_hover"
            width="84"
            height="69"
            x="-67.395"
            y="17.899"
            fill="gray"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.845"
            className="rooms"
            opacity="0.25"
            paintOrder="stroke markers fill"
            ry="0"
          ></rect>
        </g>
      </g>
    </svg>
  );
}

export default SvgMap;

