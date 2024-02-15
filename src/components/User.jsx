import { useLoaderData } from "react-router-dom";

const User = () => {
const loadedUsers = useLoaderData();
    return (
        <div>
            <h2>Users : {loadedUsers.length}</h2>
<div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        loadedUsers.map(user =>  <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <button className="btn btn-error btn-outline">X</button>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;