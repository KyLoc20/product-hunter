const iconMap = {
    unknown: {
        path: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",
        viewBox: "0 0 512 512",
    },
    delete: {
        path: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        viewBox: "0 0 24 24",
    },
    down: {
        path: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
        viewBox: "0 0 24 24",
    },
    down1: {
        //triangle
        path: " M7,10L12,15L17,10H7Z",
        viewBox: "0 0 24 24",
    },
    down2: {
        path: "M5.998 6.244a.99.99 0 01-.703-.292L1.048 1.705A1.003 1.003 0 011.05.293.996.996 0 012.462.29L6 3.83 9.538.29a1.003 1.003 0 011.412.003.997.997 0 01.002 1.412L6.705 5.952a.992.992 0 01-.702.29z",
        viewBox: "0 0 12 7",
    },
    up: {
        path: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
        viewBox: "0 0 24 24",
    },
    upTriangle: {
        path: "m7 14 5-5 5 5z",
        viewBox: "0 0 24 24",
    },
    clock: {
        path: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
        viewBox: "0 0 24 24",
    },
    shopcart: {
        path: "M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z",
        viewBox: "0 0 24 24",
    },
    home: {
        path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
        viewBox: "0 0 24 24",
    },
    fire: {
        path: "M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z",
        viewBox: "0 0 24 24",
    },
    breadcrumbs: {
        path: "M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        viewBox: "0 0 24 24",
    },
    more: {
        //common
        path: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        viewBox: "0 2 24 24",
    },
    more1: {
        //IOS
        path: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        viewBox: "0 0 24 24",
    },
    more2: {
        //Android
        path: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        viewBox: "0 0 24 24",
    },

    recent: {
        path: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z",
        viewBox: "0 0 24 24",
    },
    favorite: {
        path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
        viewBox: "0 0 24 24",
    },
    favoriteBorder: {
        path: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",
        viewBox: "0 0 24 24",
    },
    favoriteFilled: {
        path: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
        viewBox: "0 0 24 24",
    },
    bookmarkBorder: {
        path: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z",
        viewBox: "0 0 24 24",
    },
    bookmarkFilled: {
        path: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z",
        viewBox: "0 0 24 24",
    },
    share: {
        path: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
        viewBox: "0 0 24 24",
    },
    nearby: {
        path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
        viewBox: "0 0 24 24",
    },
    menu: {
        path: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
        viewBox: "0 0 24 24",
    },
    message: {
        path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
        viewBox: "0 0 24 24",
    },
    message1: {
        path: "M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z",
        viewBox: "0 0 12 11",
    },
    notice: {
        path: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
        viewBox: "0 0 24 24",
    },
    notice2: {
        path: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z",
        viewBox: "0 0 24 24",
    },
    add: {
        path: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
        viewBox: "0 0 24 24",
    },
    edit: {
        path: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
        viewBox: "0 0 24 24",
    },
    compass: {
        path: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z",
        viewBox: "0 0 24 24",
    },
    sub: {
        path: "M19 13H5v-2h14v2z",
        viewBox: "0 0 24 24",
    },
    face: {
        path: "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z",
        viewBox: "0 0 24 24",
    },
    cross: {
        path: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
        viewBox: "0 0 24 24",
    },
    cross1: {
        path: "M6 4.586l4.24-4.24a1 1 0 111.416 1.413L7.413 6l4.24 4.24a1 1 0 11-1.413 1.416L6 7.413l-4.24 4.24A1 1 0 11.344 10.24L4.587 6 .347 1.76A1 1 0 111.757.343L6 4.587z",
        viewBox: "0 0 12 12",
    },
    check: {
        path: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
        viewBox: "0 0 24 24",
    },
    setting: {
        path: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
        viewBox: "0 0 24 24",
    },
    setting2: {
        path: "M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z",
        viewBox: "0 0 24 24",
    },
    addToGroup: {
        path: "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",
        viewBox: "0 0 24 24",
    },
    desktop: {
        path: "M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z",
        viewBox: "0 0 24 24",
    },

    store: {
        path: "M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z",
        viewBox: "0 0 24 24",
    },

    job: {
        path: "M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7M10 5H14V7H10V5M4 9H20V14H15V11H9V14H4V9M13 15H11V13H13V15M19 19H5V16H9V17H15V16H19V19Z",
        viewBox: "0 0 24 24",
    },
    search: {
        path: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
        viewBox: "0 0 24 24",
    },
    search1: {
        path: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm8.707 12.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z",
        viewBox: "0 0 16 16",
    },
    translation: {
        path: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z",
        viewBox: "0 0 24 24",
    },
    emptyBox: {
        path: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
        viewBox: "0 0 24 24",
    },
    checkedBox: {
        path: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
        viewBox: "0 0 24 24",
    },
    plus: {
        path: "M5 5V1.002a1 1 0 112 0V5h3.998a1 1 0 110 2H7v3.998a1 1 0 11-2 0V7H1.002a1 1 0 110-2H5z",
        viewBox: "0 0 12 12",
    },
    twitter: {
        path: "M15.999 1.537a6.57 6.57 0 01-1.885.517A3.296 3.296 0 0015.557.238a6.576 6.576 0 01-2.084.796A3.282 3.282 0 007.88 4.027 9.32 9.32 0 011.112.599 3.28 3.28 0 002.13 4.98a3.27 3.27 0 01-1.487-.41v.042a3.284 3.284 0 002.633 3.217 3.29 3.29 0 01-1.483.056 3.286 3.286 0 003.067 2.28A6.587 6.587 0 010 11.523a9.29 9.29 0 005.032 1.475c6.038 0 9.34-5.001 9.34-9.338 0-.143-.004-.284-.01-.425a6.673 6.673 0 001.637-1.698H16z",
        viewBox: "0 0 16 13",
    },
    facebook: {
        path: "M7.2 2.323H5.923c-1.046 0-1.278.464-1.278 1.16V5.11h2.44l-.35 2.438h-2.09v6.387H2.09V7.548H0V5.11h2.09V3.252C2.09 1.162 3.368 0 5.342 0c.93 0 1.742.116 1.858.116v2.207z",
        viewBox: "0 0 8 14",
    },
    embed: {
        path: "M13.8 3.904V2l5 3.691v1.455l-5 3.702V8.934l3.493-2.325.496-.166v-.058l-.496-.196L13.8 3.904zM7.917 12.44H6.4l5.492-12H13.4l-5.483 12zM2.475 6.238l-.531.176v.059l.531.185 3.494 2.227v1.963l-5.1-3.702V5.691L5.969 2v1.963L2.475 6.238z",
        viewBox: "0 0 19 13",
    },
    collect: {
        path: "M11.182.25c1.135 0 2.116.756 2.199 1.79l.005.142v4.916h-1.5V2.182c0-.18-.23-.386-.583-.425l-.121-.007H2.455c-.378 0-.647.188-.697.371l-.008.06v10.637c0 .18.23.386.583.425l.122.007h5.84v1.5h-5.84c-1.136 0-2.116-.756-2.2-1.79l-.005-.142V2.182c0-1.057.93-1.86 2.05-1.927L2.456.25h8.727zm2.204 8.636v2.182h2.182v1.5h-2.182v2.182h-1.5v-2.182H9.705v-1.5h2.181V8.886h1.5z",
        viewBox: "0 0 16 15",
    },
    downArrow: {
        path: "M5.998 6.244a.99.99 0 01-.703-.292L1.048 1.705A1.003 1.003 0 011.05.293.996.996 0 012.462.29L6 3.83 9.538.29a1.003 1.003 0 011.412.003.997.997 0 01.002 1.412L6.705 5.952a.992.992 0 01-.702.29z",
        viewBox: "0 0 12 7",
    },
    facebook2: {
        path: "M16 8.048a8 8 0 10-9.25 7.9V10.36H4.719V8.048H6.75V6.285a2.822 2.822 0 013.021-3.112c.6.008 1.199.06 1.791.156V5.3h-1.008a1.155 1.155 0 00-1.3 1.25v1.5h2.219l-.355 2.312H9.25v5.591A8 8 0 0016 8.048z",
        viewBox: "0 0 16 16",
    },
    instagram: {
        path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        viewBox: "0 0 448 512",
    },
    query: {
        path: "M8.362 0C3.751 0 0 3.75 0 8.362c0 4.61 3.75 8.362 8.362 8.362 4.61 0 8.362-3.752 8.362-8.362C16.724 3.751 12.972 0 8.362 0zm1.02 12.967c0 .238-.103.454-.305.641-.2.185-.467.279-.795.279-.337 0-.615-.093-.826-.277-.215-.187-.325-.404-.325-.643v-.41c0-.24.11-.456.325-.644.21-.183.489-.276.826-.276.328 0 .595.094.795.279.202.187.305.403.305.64v.411zm2.265-6.158a2.502 2.502 0 01-.502.678 4.335 4.335 0 01-.642.5 5.83 5.83 0 00-.611.448 2.3 2.3 0 00-.457.513c-.114.178-.172.4-.172.661v.258c0 .172-.084.351-.25.535a.915.915 0 01-.667.296l-.056.001c-.279 0-.505-.08-.674-.237-.18-.169-.272-.359-.272-.564 0-.48.067-.888.198-1.215a3.24 3.24 0 01.482-.836c.188-.23.4-.431.63-.599.22-.158.422-.316.603-.466.174-.145.325-.3.446-.46a.875.875 0 00.166-.547c0-.363-.098-.622-.301-.794-.206-.174-.49-.262-.846-.262-.237 0-.44.014-.604.044a1.417 1.417 0 00-.805.409 3.658 3.658 0 00-.369.442 1.02 1.02 0 01-.503.36c-.225.082-.475.06-.736-.064-.234-.117-.378-.27-.426-.455a1.048 1.048 0 01-.001-.53c.033-.154.125-.343.282-.576a2.82 2.82 0 01.65-.659c.277-.21.628-.392 1.042-.542.417-.15.917-.227 1.485-.227.56 0 1.046.085 1.444.253.4.168.727.393.97.668a2.6 2.6 0 01.534.94c.11.344.165.704.165 1.07 0 .37-.068.693-.203.957z",
        viewBox: "0 0 17 17",
    },

};
const iconList = Object.keys(iconMap)
const iconChecker = function(iconName) {
    return iconList.indexOf(iconName) !== -1
}
export {
    iconMap,
    iconList,
    iconChecker
}