import "./impressum.css";

function Impressum() {
    return (
        <>
            <div className='mainContainerImpressum'>
                <div className='impressumBox'>
                    <h1 className='impressumTitle'>Impressum</h1>
                    <h2 className='impressumHeadline'>
                        Angaben gemäß § 5 TMG:
                    </h2>
                    <h3 className='impressumSubTitle'>
                        Colin Grahm Media & Commerce
                    </h3>
                    <p className='impressumDescription'>
                        Schwedenstraße 29A
                        <br />
                        04420 Markranstädt
                        <br />
                        Deutschland
                        <br />
                        <br />
                        <strong>Vertreten durch:</strong>
                        <br />
                        <strong>Colin Grahm (Geschäftsführer)</strong>
                        <br />
                        <br />
                        Tel:{" "}
                        <a className='link' href='tel:017624693418'>
                            Anrufen
                        </a>
                        <br />
                        E-Mail:{" "}
                        <a
                            className='link'
                            href='mailto:colingrahmmedia@gmail.com'
                        >
                            colingrahmmedia@gmail.com
                        </a>
                        <br />
                    </p>
                </div>
            </div>
        </>
    );
}

export default Impressum;
