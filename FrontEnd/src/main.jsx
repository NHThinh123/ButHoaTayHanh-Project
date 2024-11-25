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
import { ConfigProvider } from "antd";
import MyTopicPage from "./pages/myTopic.jsx";
import CharacterCreatePage from "./pages/characterCreate.jsx";
import PrivateRoute from "./contexts/private-route.jsx";
import TopicEditPage from "./pages/topicEdit.jsx";

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
        element: (
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        ),
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
            element: (
              <PrivateRoute>
                <CharacterCreatePage />
              </PrivateRoute>
            ),
          },
          {
            path: ":id",
            element: <CharacterInfoPage />,
          },
          {
            path: ":id/edit",
            element: (
              <PrivateRoute>
                <CharacterEditPage />
              </PrivateRoute>
            ),
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
            element: (
              <PrivateRoute>
                <TopicCreatePage />
              </PrivateRoute>
            ),
          },
          {
            path: "me",
            element: (
              <PrivateRoute>
                <MyTopicPage />
              </PrivateRoute>
            ),
          },
          {
            path: ":id/edit",
            element: (
              <PrivateRoute>
                <TopicEditPage />
              </PrivateRoute>
            ),
          },
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
    path: "test/:id",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#4335A7",
      },
      components: {
        Tag: {
          defaultBorderColor: "#000000",
          borderColor: "#000000",
          borderColorSplit: "#000000",
          lineWidth: 1,
          borderRadius: 2,
        },
      },
    }}
  >
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </ConfigProvider>
);
