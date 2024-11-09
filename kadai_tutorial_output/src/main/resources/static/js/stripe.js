const stripe = Stripe('pk_test_51QIod5A9tGKnyqE5bNwPUpnWqK4FHnqPuSJ53DEZp0q0fJFkps7hxY0vD5izc8zEhTSuZwaTC0JYdhNfKr1ndnby00oPY2Q12N');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });