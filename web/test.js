// useEffect(()=>{
//     $(".login_footer_button-login").on("click",()=>{
//       let uuser = $("#input_login_username").val();
//       let upass = $("#input_login_password").val();
//       console.log("aa",uuser,upass)
//       if(uuser !== ""){
//         Get("login_user/"+uuser+upass)
//         .then((result) => {
//           console.log(result)
//           if(result["state"] === "true_login")
//           {
//             setLogin(1)
//             setUser(result["data_user"])
//           }
//         }).catch((err) => {
//           console.log(err)
//         });
//       }
//     })
//     $(document).ready(function() {
//       // Listen for the beforeunload event
//       $(window).on('beforeunload', function() {
//         // Handle the page reload event here
//         setLogin(0)
//         console.log('Page is about to be reloaded');
//         // You can perform additional actions here if needed
//       });
//     });

//   },[])