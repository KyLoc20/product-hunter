import "../styles/globals.css"

export default function App({ Component, pageProps }) {
    pageProps.version = "v0.0.1"
    return <Component {...pageProps }
    />
}