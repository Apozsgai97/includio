"use client"

import { UploadButton } from "@/utils/uploadthing";

export default function Page() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <form
          action=""
          className="flex flex-col justify-center items-center p-8 w-full md:shadow-xl md:w-6/12 md:my-12 my-4 md:rounded-lg md:border-accent md:border-2"
          aria-labelledby="form-title"
        >
          <h1 id="form-title" className="text-2xl font-bold mb-4 text-center">
            Add a New Business
          </h1>

          <fieldset className="w-full max-w-xl mb-6">
            <legend className="text-lg font-bold mb-4">
              Basic Information
            </legend>

            <label htmlFor="name" className="label-text mb-2 font-medium">
              Business Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Harmony Bites"
              className="input input-accent input-bordered w-full mb-2 bg-slate-50 rounded-lg"
              required
              aria-describedby="name-help"
            />
            <small id="name-help" className="text-sm text-gray-600 mb-6 block">
              Enter the full business name.
            </small>

            <label
              htmlFor="description"
              className="label-text mb-2 font-medium"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Short description of your business"
              className="textarea textarea-bordered textarea-accent w-full mb-2 bg-slate-50 rounded-lg"
              required
              aria-describedby="description-help"
              rows={4}
            ></textarea>
            <small
              id="description-help"
              className="text-sm mb-6 text-gray-600 block"
            >
              Enter a short description of your business.
            </small>
            <label htmlFor="category" className="label-text mb-2 font-medium">
              Select a Category
            </label>
            <select
              id="category"
              name="category"
              className="select select-accent w-full bg-slate-50 rounded-lg mb-6"
              required
            >
              <option value="Restaurants and Cafes">
                Restaurants and Cafes
              </option>
              <option value="Parks and Outdoor Spaces">
                Parks and Outdoor Spaces
              </option>
              <option value="Healthcare and Wellness">
                Healthcare and Wellness
              </option>
              <option value="Shopping">Shopping</option>
              <option value="Cultural and Recreational">
                Cultural and Recreational
              </option>
              <option value="Event Spaces">Event Spaces</option>
              <option value="Education and Workspaces">
                Education and Workspaces
              </option>
            </select>
            <label htmlFor="address" className="label-text mb-2 font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Storgatan 12, 114 51 Stockholm, Sweden"
              className="input input-bordered input-accent w-full mb-4 bg-slate-50 rounded-lg"
              required
            />
          </fieldset>

          <fieldset className="w-full max-w-xl mb-6">
            <legend className="text-lg font-bold mb-4">Contact Details</legend>

            <label htmlFor="email" className="label-text mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              className="input input-bordered input-accent w-full mb-6 bg-slate-50 rounded-lg"
              required
            />

            <label htmlFor="telephone" className="label-text mb-2 font-medium">
              Telephone Number
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="+46 70 123 4567"
              className="input input-bordered input-accent w-full bg-slate-50 rounded-lg"
              required
              pattern="^\+?[0-9]{1,4}?[-.●]?[0-9]{1,14}(?:x.+)?$"
            />
          </fieldset>
          <fieldset className="w-full max-w-xl mb-6">
            <legend className="text-lg font-bold text-center mb-4">
              Add an image
            </legend>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </fieldset>
          <button
            type="submit"
            className="btn bg-emerald-900 h-14 text-slate-50 hover:bg-emerald-800 rounded-lg mt-4"
          >
            Add Business
          </button>
        </form>
      </section>
    </>
  );
}
