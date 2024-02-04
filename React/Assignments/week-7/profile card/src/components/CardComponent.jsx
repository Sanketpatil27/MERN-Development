import "../App.css"
export function CardComponent() {

    return <div id="card" >
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="photo" />

        <div class="first"> </div>
        
        <div class="second"> 
            <p> <b> Rita Correia </b> 32</p>
            <p> London </p>
        </div>
        
        <div className="seperator"> </div>

        <footer class="footer"> 
            <div> 
               <b>80K</b> 
               <p>Followers</p>
            </div>
            
            <div> 
               <b>803K</b> 
               <p>Likes</p>
            </div>
            
            <div> 
               <b>1.4K</b> 
               <p>Photos</p>
            </div>
            
        </footer>
    </div>
}