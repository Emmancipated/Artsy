import checkOutWoman from "../image/Woman get online delivery.png";
function SuccessPage ({showSuccessPage}) {

  return showSuccessPage === 1 ? 
   
        <section id="SuccessPage">
          <main className="SuccessPage-container">
            <div className="SuccessPage-image">
              <img src={checkOutWoman} alt="checkout" />
            </div>
            <h3>
              Hey Celestina, thank you for your purchase.
            </h3>
            <p>
              You are amazing. Cheers to being ARTSY!
            </p>
            <p><a href="/">Home</a></p>
          </main>
        </section>
        :
        ""
      
}

export default SuccessPage;