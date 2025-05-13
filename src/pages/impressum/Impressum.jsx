import "./impressum.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Impressum() {
    return (
        <>
            <Header />
            <div className="mainContainerImpressum">
                <div className="impressumBox">
                    <h1 className="impressumTitle">Impressum</h1>
                    <h2 className="headline">Angaben gemäß § 5 TMG:</h2>
                    <h3 className="impressumSubTitle">flowefy. - Eine Marke von Colin Grahm Media & Commerce</h3>
                    <p className="impressumDescription">
                        Schwedenstraße 29A<br/>
                        04420 Markranstädt<br/>
                        Deutschland<br/>
                        <br/>
                        <strong>Vertreten durch:</strong><br/>
                        <strong>Colin Grahm (Geschäftsführer)</strong><br/>
                        <br/>
                        Tel: <a className="link" href="tel:017624693418">0177-4821477</a><br/>
                        E-Mail: <a className="link" href="mailto:colingrahmmedia@gmail.com">colingrahmmedia@gmail.com</a><br/>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Impressum;