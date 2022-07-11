Nice guide to React as a framework

[Framer Guide to React](https://www.framer.com/books/framer-guide-to-react/)

Chapsnat repo → for this!

[ChatSnap Repo to fork and clone](https://github.com/Snap-Engineering-Academy-2022/chapsnat_2022)

# Part B: Lab time with GiftedChat 🧪

- Fork that chapsnat repo!
- run `yarn install` to kickstart it (download all the dependencies)
    - Discuss: why do we need to do this? What exactly is it doing?
- run `expo start` to make sure it's working. Should just be a "starter" React Native app.
- Take this time to explore the project folder with your partner!
    - see this slide:
        
        ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7796c127-d72c-42f2-8394-db789e87779c%2FUntitled.png?table=block&id=3a3de804-8254-45cd-86b4-7e75cfb6f7b6&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7796c127-d72c-42f2-8394-db789e87779c%2FUntitled.png?table=block&id=3a3de804-8254-45cd-86b4-7e75cfb6f7b6&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)
        
- **add the `react-native-gifted-chat` package to your project**
    - Discuss: how do you do this with `yarn` ?
    - Checkout `package.json` after you add the package. Do you see it there?
- **Take 5 minutes to checkout the README in the Gifted Chat repo**
    - [https://github.com/FaridSafi/react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)
    - Discuss: Look at the example, and all the props. So many props!
- **Now, using the Example code in the README as a guide, import the GiftedChat component into your `App.js`, and put the component in your render function (which is the `return` statement). Run the code - try it out! Wow!**
    - If you need some help, take a look at Jenny's 5-min chat code from yesterday:
        - [https://github.com/Snap-Engineering-Academy-2021/5minchat/blob/main/App.js](https://github.com/Snap-Engineering-Academy-2021/5minchat/blob/main/App.js)
    - Discuss: what is going on? What is the `messages` state? What are the `messages`, `onSend`, and `user` props?
    - `useCallback` is another hook! You can read more about it if you like, but for now just treat it like a normal arrow function callback with a fancy wrapper.
    - Try removing `setMessages` from the callback and run the code again. What happens? What’s changed?
- **Explore time! Go back to the GiftedChat README. Time to play around with some of those props.**
    - Change the placeholder text from “Type a message…” to something else!
    - Change `user` prop to have your name and a photo (avatar) of your choosing from the web.
        - You might need to use the `showUserAvatar` prop for the user info to show up
    - Try using the `alwaysShowSend` prop. What changes?
    - Try using `renderUsernameOnMessage` ! Nice!
- **Time to take a deeper look at the whole `messages` thing!**
    - First, let’s see how the Example code from the README loads in some “dummy” messages. (What do we mean by “dummy”?)
        
        ```jsx
        useEffect(() => {
            setMessages([
        				...
            ])
          }, [])
        ```
        
    - There’s that `useEffect` hook we were talking about!
    - Take a few minutes to read through the explanation here: [https://reactjs.org/docs/hooks-overview.html#effect-hook](https://reactjs.org/docs/hooks-effect.html)
        - Take note: that empty array at the end means that the "effect" only gets run **once** at the beginning when our app loads. (Why do we want this?)
    - Discuss with your partner! There’s a lot of information there, so [✨💪 **ACTION ITEM ☑️**] **come up with a couple questions to share back with class, that we can answer together.**
    - Now, start playing around with that “dummy” data! Add some more messages to the array. Create a fake conversation!
        - What are the `_id`s?
            - Which one is the message `_id` and which is the user `_id` ?
        - What's going on with `createdAt` ?
        - [🥅 **GOAL** 🏁] **Can you make both grey and blue bubbles in the dummy data?**
        - Try adding images and/or videos to your dummy messages.
    

# Part C: Firebase Code-Along 🔥

!!?? did we????? In the afternoon, we talked about Firebase, which is a Backend-As-A-Service. 

## Firebase- Cloud Firestore!

[Cloud Firestore | Firebase](https://firebase.google.com/docs/firestore)

### Here's a summary of what we did during the code-along

### 1. **Install firebase so you can use it in Expo!**

```jsx
expo install firebase
```

### 2. Make a firebase account!

[https://firebase.google.com/](https://firebase.google.com/)

### 3. **Create a Project**.

 ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F27b874c5-f9f5-481f-aa73-9eeb30b8265d%2FUntitled.png?table=block&id=f58e1d48-28cc-4910-b175-46fb5bd37145&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F27b874c5-f9f5-481f-aa73-9eeb30b8265d%2FUntitled.png?table=block&id=f58e1d48-28cc-4910-b175-46fb5bd37145&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)
![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75fcbe0b-482e-44ed-9178-43ee9441310d%2FUntitled.png?table=block&id=664e73dd-790d-4c5a-8cae-5a5f5a90424d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=480&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75fcbe0b-482e-44ed-9178-43ee9441310d%2FUntitled.png?table=block&id=664e73dd-790d-4c5a-8cae-5a5f5a90424d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=480&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)

### 4**. Enable Cloud Firestore**

The RN app uses [Cloud Firestore](https://firebase.google.com/docs/firestore/) to save chat messages and receive new chat messages.

You'll need to enable Cloud Firestore with the following steps:

1. In the Firebase console's **Develop** section, click **Database**.
    
   ![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70994747-0dc5-4dd8-8df8-09ed15a08137%2FUntitled.png?table=block&id=4821317b-a954-4c48-bf32-8216320279cb&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F70994747-0dc5-4dd8-8df8-09ed15a08137%2FUntitled.png?table=block&id=4821317b-a954-4c48-bf32-8216320279cb&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=b8cc0f5a-88d2-42e5-8739-9f94ccd628a6&cache=v2)
    
2. Click **Create database** in the Cloud Firestore pane.
3. Select the **Start in test mode** option, then click **Next** after reading the disclaimer about the security rules.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff744744e-b63c-49b3-a122-eba83d04f830%2FUntitled.png?table=block&id=932225b8-0b60-49ea-b5f1-4e129fd2e1dd&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff744744e-b63c-49b3-a122-eba83d04f830%2FUntitled.png?table=block&id=932225b8-0b60-49ea-b5f1-4e129fd2e1dd&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

Test mode ensures that we can freely write to the database during development. We'll make our database more secure later on in this codelab.

d. Make sure you select your data to be stored close to where you are physically! 

us-west2 is LA. 

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F306dc7db-c488-4ade-857c-80a0457b5bcb%2FUntitled.png?table=block&id=d8569413-37e7-4328-8144-0ce64d44f442&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F306dc7db-c488-4ade-857c-80a0457b5bcb%2FUntitled.png?table=block&id=d8569413-37e7-4328-8144-0ce64d44f442&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

<aside>
☝🏾 Please be careful to enable Cloud Firestore and NOT the Realtime Database for this codelab. Both options are on the same page, but you need to enable Cloud Firestore, which is in the top section of the page.

</aside>

### 5. **Add an app.**

Yes, it's confusing... We just created a Project, but now we have to create an App under that Project! 

Go to the Project Overview Page. 

1. Select the web app option. Even though we're technically not making a web app, React Native will fall under this category! 

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4037a265-d14e-4b14-b5fd-6c799ff2d693%2FUntitled_presentation_(1).png?table=block&id=d548a4fe-21c4-4a33-9b38-13c43e1be948&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4037a265-d14e-4b14-b5fd-6c799ff2d693%2FUntitled_presentation_(1).png?table=block&id=d548a4fe-21c4-4a33-9b38-13c43e1be948&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

 b. Register the app with the nickname **Smapchat**. Click **Register app**.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F051f57ad-00c3-4d72-9797-485d80e3586f%2FUntitled.png?table=block&id=6b1500bf-e81b-4dbb-8b20-ba58bb8421fe&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1340&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F051f57ad-00c3-4d72-9797-485d80e3586f%2FUntitled.png?table=block&id=6b1500bf-e81b-4dbb-8b20-ba58bb8421fe&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1340&userId=&cache=v2)

c. You'll see some code snippets! We'll copy the Firebase SDK code into our React Native app.

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8a882076-423f-4378-b292-3a6f250b4d04%2FUntitled.png?table=block&id=544c22a0-3d8f-4ccd-85fc-fd6e159edf95&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8a882076-423f-4378-b292-3a6f250b4d04%2FUntitled.png?table=block&id=544c22a0-3d8f-4ccd-85fc-fd6e159edf95&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

### 6. Set up Firebase on your React Native app.

Go back to your React Native project in VSCode. Create a new `firebase.js` file: 

```jsx
import firebase from "firebase/app";
import "firebase/firebase-firestore";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();
export default firestore;
```

### 7. Create a collection in your Cloud Firestore.

On the lefthand bar of the Firebase Console, click on Cloud Firestore. 

Start a collection, and call it `Chats`: 

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e45c958-39ec-42e1-9a28-d866264f100b%2FUntitled.png?table=block&id=0e06693d-89fd-471f-baf3-2203476b1357&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e45c958-39ec-42e1-9a28-d866264f100b%2FUntitled.png?table=block&id=0e06693d-89fd-471f-baf3-2203476b1357&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=2000&userId=&cache=v2)

Then we'll add the first document: 

![https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6c6b7ce-151c-4634-978a-5f7833bcf361%2FUntitled.png?table=block&id=34abe38c-8c05-4a3f-9713-1ad7c78bb33d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1100&userId=&cache=v2](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6c6b7ce-151c-4634-978a-5f7833bcf361%2FUntitled.png?table=block&id=34abe38c-8c05-4a3f-9713-1ad7c78bb33d&spaceId=60b48455-9d72-4c97-9b1e-b7a326792bdf&width=1100&userId=&cache=v2)
