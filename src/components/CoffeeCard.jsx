import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-store-server-again-7owdm25sh-masud906.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !==_id)
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-orange-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between w-full pr-6 mt-6">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-outline btn-secondary join-item">view</button>
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn btn-outline btn-warning join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-outline btn-error join-item "> X </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;