The solution is to always handle Firebase asynchronous operations using promises.  Here's how to correctly access the snapshot data:

```javascript
db.collection('myCollection').doc('myDoc').get().then((docSnapshot) => {
  if (docSnapshot.exists) {
    const data = docSnapshot.data();
    console.log(data.myProperty); // Access data after resolution
  } else {
    console.log('Document does not exist');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```

Using `.then()` ensures that the code inside the `.then()` block only executes after the `get()` promise resolves successfully.  The `.catch()` block handles any errors that might occur during the operation.