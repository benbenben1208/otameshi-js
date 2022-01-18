import Link from "next/link";
import { NextPage } from "next";
const MailConfirmation : NextPage = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto">
        <div className="justify-center px-6 py-14">
          <div className="w-full h-auto bg-white rounded-l-lg px-10 py-20">
            <div className="text-center">
              <h1 className="text-2xl lg:text-3xl text-zinc-600 mb-16">
                メール認証が完了しました
              </h1>
              <p className="font-bold text-xl text-zinc-600 mb-16">
                下記よりログインを行ってください。
              </p>

              <Link href="/login">
                <a className="btn p-4 rounded bg-blue-900 w-64">ログイン</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailConfirmation;
