# 📝 Notes App using Express.js, MySQL & EJS

A simple, full-stack **Notes Management Application** built with **Express.js**, **MySQL**, and **EJS templating engine**. This app allows users to add and delete notes using a clean UI powered by Bootstrap 5.

---

## 🚀 Features

- 📄 Create a new note with a heading and description
- 🗑 Delete existing notes
- 📋 View all notes in a structured table
- ⚙️ MySQL-based data persistence
- 🎨 Bootstrap 5 styling with responsive layout

---

## 🛠️ Tech Stack

| Layer       | Technology                |
| ----------- | ------------------------- |
| Backend     | Node.js, Express.js       |
| Frontend    | HTML, Bootstrap 5         |
| Database    | MySQL (via `mysql2`)      |
| Templating  | Embedded JavaScript (EJS) |
| Development | Nodemon for hot-reloading |

---

## 📁 Folder Structure

```txt
express_notes_app/
│
├── app.js                  # Entry point of the app
├── db.js                   # MySQL connection pool
├── package.json            # Node.js project metadata
│
├── routes/
│   ├── index.js            # Route for note display and insertion
│   └── delete.js           # Route for note deletion
│
├── views/
│   └── index.ejs           # Main UI template
│
└── public/                 # Static files (if any)
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/itspriyambhattacharya/express_notes_app.git
cd express_notes_app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MySQL Database

Open MySQL CLI or a GUI tool (like phpMyAdmin) and execute the following SQL:

```sql
CREATE DATABASE IF NOT EXISTS myNotes;

USE myNotes;

CREATE TABLE IF NOT EXISTS note (
    id INT AUTO_INCREMENT PRIMARY KEY,
    noteHeading VARCHAR(50) NOT NULL,
    noteDesc VARCHAR(100) NOT NULL
);
```

### 4. Run the Application

```bash
npm run dev
```

App will be served at:

```txt
http://localhost:3000
```

---

## ✨ UI Preview

> A clean Bootstrap-styled interface for adding and viewing notes.

- 📌 Add a note using form
- 📋 View all saved notes in a table
- ❌ Delete note with a single click

---

## 🧠 How it Works

- `GET /` → Renders all notes from MySQL to `index.ejs`
- `POST /` → Inserts new note into the `note` table
- `GET /delete/:id` → Deletes a note by ID and redirects to `/`

All data operations are handled securely using parameterized queries via `mysql2`.

---

## 🛠️ Contributing Guidelines

Contributions are welcome and appreciated! To contribute to this project, please follow these steps:

### ✅ Steps to Contribute

#### 1. Fork the Repository

Start by forking this repository to your own GitHub account.

- Go to the [main repository](https://github.com/itspriyambhattacharya/express_notes_app)
- Click on the **Fork** button at the top-right corner

#### 2. Clone Your Fork

Clone your forked repository to your local system:

```bash
git clone https://github.com/<your-username>/express_notes_app.git
cd express_notes_app
```

#### 3. Create a New Branch

Always create a new branch before making any changes:

```bash
git checkout -b feature-branch-name
```

#### 4. Make Your Changes

Edit, debug, and test your changes locally.

#### 5. Commit and Push

```bash
git add .
git commit -m "Describe your changes"
git push origin feature-branch-name
```

#### 6. Submit a Pull Request

- Go to your repository on GitHub
- Click on **Compare & Pull Request**
- Make sure you are merging into the `main` branch of the original repository
- Provide a clear description of what you have done

---

### ⚠️ Note

> **Do NOT push directly to the `main` branch.**  
> All changes should go through a **Pull Request** and be reviewed before being merged.

---

## 👨‍💻 Author

**Priyam Bhattacharya**  
🎓 M.Sc. Computer Science — University of Calcutta  
📍 Kolkata, India  
📬 [itspriyambhattacharya](https://github.com/itspriyambhattacharya)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🐛 Bug Reporting

For any issues or feature requests, please use the [Issues Section](https://github.com/itspriyambhattacharya/express_notes_app/issues)

---

## 🔗 Useful Links

- [Express.js Documentation](https://expressjs.com/)
- [MySQL2 Library](https://www.npmjs.com/package/mysql2)
- [EJS Templating](https://ejs.co/)
- [Bootstrap 5](https://getbootstrap.com/)
