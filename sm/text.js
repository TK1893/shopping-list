    useEffect(() => {
      if (isConnected === true) {
        const q = query(collection(db, "shoppinglists"), where("uid", "==", userID));
        const unsubShoppinglists = onSnapshot(q, (documentsSnapshot) => {
          let newLists = [];
          documentsSnapshot.forEach(doc => {
            newLists.push({ id: doc.id, ...doc.data() })
          });
          cacheShoppingLists(newLists);
          setLists(newLists);
        });
      } else loadCachedLists();

      // Clean up code
      return () => {
        if (unsubShoppinglists) unsubShoppinglists();
      }
    }, []);

    useEffect(() => {
      let unsubShoppinglists;
      if (isConnected === true) {
        const q = query(collection(db, "shoppinglists"), where("uid", "==", userID));
        unsubShoppinglists = onSnapshot(q, (documentsSnapshot) => {
          // REST OF CODE STAYS THE SAME
    }, []);

    useEffect(() => {
      // SAME CODE
    }, [isConnected]);