import React from 'react'

export default function ImageLoader() {
  return (
      <div className="loader absolute w-full h-full">
          <svg className="circular" viewBox="25 25 50 50">
              <circle
                  className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="2"
                  strokeMiterlimit="10"
              />
          </svg>
      </div>
  )
}
// absolute 