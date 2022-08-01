import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div className="h-[80%] bg-yellow-300  flex justify-center items-start">
      <div className="container pt-8 px-2 md:px-0 mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold md:w-3/6">
              Let us handle your project personally
            </h1>
            <p className="md:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate mollitia cum praesentium molestiae voluptate
              dignissimos aperiam eaque deleniti a. Aut?
            </p>
          </div>

          <div>
            <input
              className="w-full md:w-4/5 my-2 p-2 rounded"
              type="text"
              placeholder="Your Email Adress"
            />{' '}
            <br />
            <input
              className="w-full md:w-4/5 my-2 p-2 rounded"
              type="text"
              placeholder="Your name/ Company name"
            />{' '}
            <br />
            <textarea
              className="w-full md:w-4/5 my-2 p-2 rounded"
              placeholder="Your Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div>
              <Button text={'Send'}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
