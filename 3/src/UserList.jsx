import { Fragment } from "react";

function UserList({ users }) {
  return (
    <Fragment>
      {users.map((user, index) => (
        <Fragment key={index}>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-4 hover:scale-[1.02] transition">
            <h2 className="text-xl font-semibold text-white mb-1">
              {user.name}
            </h2>

            <div className="flex justify-between text-sm text-slate-300">
              <span>سن: {user.age}</span>
              <span>شهر: {user.city}</span>
            </div>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default UserList;