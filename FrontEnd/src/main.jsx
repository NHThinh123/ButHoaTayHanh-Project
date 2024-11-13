import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import { AuthWrapper } from "./contexts/auth.context.jsx";
import Character from "./pages/character.jsx";
import PaymentPage from "./pages/payment.jsx";
import ResultPage from "./pages/result.jsx";
import TestPage from "./pages/test.jsx";

import CharacterEditPage from "./pages/characterEdit.jsx";
import CharacterInfoPage from "./pages/characterInfo.jsx";
import TopicPage from "./pages/topic.jsx";
import TopicCreatePage from "./pages/topicCreate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },

      {
        path: "character",
        children: [
          {
            index: true,
            element: <Character />,
          },
          {
            path: "create",
            element: <CharacterEditPage />,
          },
          {
            path: ":id",
            element: <CharacterInfoPage />,
          },
          {
            path: ":id/edit",
            element: <CharacterEditPage />,
          },
        ],
      },
      {
        path: "topic",
        children: [
          {
            index: true,
            element: <TopicPage />,
          },
          {
            path: "create",
            element: <TopicCreatePage />,
          },
          // {
          //   path: ":id",
          //   element: <CharacterInfoPage />,
          // },
          // {
          //   path: ":id/edit",
          //   element: <CharacterEditPage />,
          // },
        ],
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "payment",
    element: <PaymentPage />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
);
