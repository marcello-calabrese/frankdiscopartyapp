
export default function Form() {
    return (
        <form className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="
            Enter your email" className="input input-bordered" />
            <button className="btn btn-primary">Subscribe</button>
        </form>
    );
}