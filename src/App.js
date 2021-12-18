import MyButton from "./components/myButton";
import MySearch from "./components/mySearch";
import MyFilter from "./components/myFilter";

const goods = [
    {
        id: 1,
        product: '12',
        description: '123',
        price: '1234'
    },
    {
        id: 2,
        product: '23',
        description: '234',
        price: '2345'
    },
    {
        id: 3,
        product: '34',
        description: '345',
        price: '3456'
    },
    {
        id: 4,
        product: '45',
        description: '456',
        price: '4567'
    }
]

function App() {

    const MyGood = goods.map(function (goods) {
        return <p key={goods.id}>
            <div>{goods.product}</div>
            <div>{goods.description}</div>
            <div>{goods.price}</div>
        </p>;
    });
  return (

           <div>
                <header>
                   <MySearch place="Search.."/>
                   <MyButton onClick={() => console.log('GoMain')}>
                    Main
                   </MyButton>
                   <MyButton onClick={() => console.log('GoShop')}>
                     Shop
                   </MyButton>
                   <MyButton onClick={() => console.log('GoBasket')}>
                     Shopping Basket
                   </MyButton>
                </header>

                <div className="Topik">
                   {/*TODO add text*/}
                </div>

                <MyFilter/>
                <div className="Blocks">
                    <h1> And here are goods...</h1>
                    {MyGood}
                </div>

               <footer>
                   <hr/>
                    <MyButton onClick={() => console.log('GoMain')}>
                        Main
                    </MyButton>

                    <MyButton onClick={() => console.log('GoShop')}>
                        Shop
                    </MyButton>

                    <MyButton onClick={() => console.log('GoBasket')}>
                        Shopping Basket
                    </MyButton>

                    <div className="Topik">
                       {/*TODO add text*/}
                    </div>
               </footer>
          </div>
        );

}

export default App;
