import Header from '../comp/Header';

function Home() {
    return (
        <>
         <Header/>
         <h1>This is Home Page!</h1>
         <p>Please visit my todo app page by clicking below mentioned url.</p>
            <a href="/todo" style={{fontSize:'25px'}}>Go On Todo Page</a>
         </>
    );
}
export default Home;