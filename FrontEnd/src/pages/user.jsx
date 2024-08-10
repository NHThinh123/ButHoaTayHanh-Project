import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";
const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserApi();
      if (res) {
        setDataSource(res);
      }
    };
    fetchUser();
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Email",
      dataIndex: "userName",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} rowKey={"_id"} />
    </>
  );
};

export default UserPage;
