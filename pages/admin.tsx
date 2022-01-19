import React from "react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { adminAuth } from "../hooks/adminAuth";

// rfce÷
const AdminHome: NextPage = () => {
  const { admin } = adminAuth();

  const zoom0uthLink  = `https://zoom.us/oauth/authorize?response_type=code&client_id=bjrL15yITX6BAeAoU0Vkcg&redirect_uri=http://localhost/zoomoauth/check`;
  console.log(admin);
  return (
    <div className="flex flex-1 justify-center items-center w-screen flex-col">
      <h1 className="mb-8">管理者トップページ</h1>
      {admin && !admin.zoom_code ? (
        <div className="bg--800">
          <h2 className="mb-5">zoomとの連携が行われていません</h2>
          <p>このシステムをご利用する場合、Zoomとの連携を行ってください</p>
          <p className="mt-7"><a href={zoom0uthLink} className="hover:bg-blue-300 bg-red-900 p-4">Zoomと連携</a></p>
        </div>
      ) : (
        <h2>zoomとの連携がされている管理者だった場合の表示と処理をさせる(まだ未作成)</h2>
      )}
    </div>
  );
};

export default AdminHome;
