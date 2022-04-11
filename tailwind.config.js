module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing :{
        '50.95px' : '50.95px',
        '120px' : '120px'
      },
      padding: {
        '120px': '120px',
        "158.5px" : "158.5px",
        '156.5px' : '156.5px'
      },
      margin : {
         "151.5px" : "130.5px",
         "27px" : "27px",
         '120px': '120px',
         '91px' : '91px',
         '60px' : '60px',
         '56.59px' : '56.59px'
      },
      colors : {
        "primary" : "#11263F",
        'seccondery' : "#565C64",
        "demo" : "#617FF2",
        'button' : "#7183F3",
        'fill' : "#F5F7FF",
        'third' : "#848E9C",
        'banner' : "#F5F5F5",
        "blue-gray" : "#465567",
        'ring-color' : "#0095B8"
      },
      lineHeight : {
        "3.5rem" : "3.5rem"
      },
      borderRadius: {
        "large" : "30px"
      },
      fontSize : {
        "32px" : "2 rem"
      },
      maxWidth: {
        'container': '82%',
      },
      minWidth: {
        '85': '350px',
      },
      maxHeight: {
        '85': '350px',
      },
      fontFamily:{
       "saolText" : "Saol-text"
      },
      inset: {
        '3px': '3px',
      },
      backgroundImage: {
         'about-banner' : "url('/images/stock-photo--d-binary-tunnel-background-data-stream-concept-96438890 1.png')",
         'solution-banner' : "url('/images/shutterstock_761874310 1.png')",
         'contact-banner' : "url('/images/contact-bg.png')"
      },
      gridTemplateColumns: {
        'about' : 'repeat(2, minmax(0, max-content))',
        '1fr-2fr': '1fr 2fr'
      }
    },
  },
  plugins: [],
}
