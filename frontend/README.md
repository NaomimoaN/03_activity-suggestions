# 🎯 Activity Suggester App

This small project was part of my daily practice during my second month of **learning React at Langara College (WMDD)**.
Rather than being a full-scale project, it's a simple exercise to explore **React basics** like **state, props, and API calls**.

---

## 🛠️ Features

- ✅ Choose an **activity type** (e.g. recreational, education, cooking, etc.)
- 🔄 Get a **random activity suggestion** based on your selection
- 🎲 Try **another suggestion** by clicking a button
- 🌐 Includes a basic **Express.js backend** to test connection

---

## 🧠 What I Practiced

- **React Hooks**:  
  - `useState`, `useEffect`  
  - How to handle side effects when a prop (activity type) changes  
- **Component Communication**:  
  - Passing data from child to parent via props (`handleTypeClick`)  
- **API integration**:  
  - Used `axios` to fetch data from the [Bored API](https://www.boredapi.com/)  
- **UI Behavior**:  
  - Conditional rendering for loading/error  
  - Button events like `onClick`  
- **Backend Setup**:  
  - Created a basic Express server (`/api/test`)  

---

## 💄 Styling

The project includes a simple but responsive layout using **CSS Flexbox**.  
Key UI elements:

- Activity suggestion cards with borders and padding
- List items (`li`) with hover and selected styles
- Button with hover effects
- Background and font styles for readability

---

## ⚙️ Tech Stack

- Frontend: **React**
- Backend: **Node.js** + **Express**
- API: [Scrimba Bored API](https://apis.scrimba.com/bored/api/activity)
- Styling: **CSS**

---

## 📂 Folder Structure

04_counterApp/
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Activity.js
│   │   │   └── TypeChooser.js
│   │   └── App.css
├── backend/
│   └── server.js
├── README.md


## 🚀 How to Run

1. Clone the repo  
   `git clone https://github.com/NaomimoaN/04_counterApp.git`

2. Start backend  

3. Start frontend  


## ✨ Future Ideas

- Add `useRef` to improve user interaction
- Display more activity details (participants, price, etc.)
- Add animations with CSS or Framer Motion
- 

##### 🙌 Author
Built with ❤️ by Naomi Fujii
