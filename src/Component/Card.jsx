import React from 'react'

export default function Card({ id, image, price, name, description, onClick }) {
  return (
    <main>
          <div className="max-w-sm p-4 border rounded-lg hover:bg-white hover:border-gray-200 hover:shadow" key={prod}>
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                {price}
              </h5>
              <h6 className="text-xl">{produit.name}</h6>
              <p className="my-3 ">
               {produit.title}
              </p>
              <p className="my-2">{produit.list}</p>
              <p className="my-2">{produit.visible}</p>
              <p className="my-4">{produit.title1}</p>
              <p className="my-4">{produit.title2}</p>
              <p className="my-4">{produit.time}</p>
              <p className="my-4">{produit.support}</p>
            </div>
          </div>
    </main>
  )
}

