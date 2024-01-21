
import { useNavigate } from "react-router-dom";
const  Data= () => {
 
 
 let data= [
   {
     "userId": 1,
     "id": 1,
     "title": "Faster font loading with font event",
     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   },
   {
     "userId": 1,
     "id": 2,
     "title": "improving front-end performance",
     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
   },
   {
     "userId": 1,
     "id": 3,
     "title": "Responsible social share links",
     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
   },
   {
     "userId": 1,
     "id": 4,
     "title": "Responsive typography with sass maps",
     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
   },
   {
     "userId": 1,
     "id": 5,
     "title": "Google's mobile-friendly search results update",
     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
   },
   {
     "userId": 1,
     "id": 6,
     "title": "dolorem eum magni eos aperiam quia",
     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
   },
   {
     "userId": 1,
     "id": 7,
     "title": "magnam facilis autem",
     "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
   },
   {
     "userId": 1,
     "id": 8,
     "title": "dolorem dolore est ipsam",
     "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
   },
   {
     "userId": 1,
     "id": 9,
     "title": "nesciunt iure omnis dolorem tempora et accusantium",
     "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
   },
   {
     "userId": 1,
     "id": 10,
     "title": "optio molestias id quia eum",
     "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
   },

 ]
 const student=["ali","ahsn"]
 const navigate = useNavigate();
  
const handleClick = ((data)=>{
 if(data){
   navigate(`/History/${data.id}`,{state:{key:data,key2:student}});
 }
})
 return ( 
   <>
   {data.map((list, index) => (
     <div className="container" key={index}>
       <div className="row">
         <div className="col-md-12">
           <div className="card my-3">
           <div className="card-header">
               <h5 className="card-title">{list.title}</h5>
               </div>
               <div className="card-body">
               <p className="card-text">{list.body}</p>
             </div>
            
                 <button onClick={()=>handleClick(list)} >Read More</button>
           </div>
         </div>
       </div>
     </div>
   ))}</>
  );
}
export default Data;