'use client'

import Tippy, { TippyProps } from '@tippyjs/react'

export default function Home() {
  return (
    <div className="p-20 flex flex-col gap-10 font-sans">
      <h1 className="font-semibold text-4xl">Next Tippy Issue Repo</h1>

      <p className="my-4">
        Works in development, fails when built for production. Hover the element below in
        development to see it working, building for production will not allow the front end to
        render.
      </p>

      <Tippy
        content="Test tooltip"
        animation="scale"
        arrow={false}
        inertia={true}
        placement={'top'}
      >
        <div className="!inline-block !w-fit p-3 rounded bg-gray-200 border font-semibold cursor-pointer">
          Hover me
        </div>
      </Tippy>

      <div>
        <h1 className="font-bold">Steps to reproduce this issue:</h1>

        <ol className="mt-2 list-decimal flex flex-col gap-2">
          <li>
            Clone the repo{' '}
            <a
              className="text-blue-600"
              href="https://github.com/shanehoban/nextjs-tippy-issue"
              target="_blank"
            >
              https://github.com/shanehoban/nextjs-tippy-issue
            </a>
          </li>

          <li>
            <pre>cd /path/to/repo</pre>
          </li>

          <li>
            <pre>npm i</pre>
          </li>

          <li>
            <pre>npm run build</pre>
          </li>

          <li>
            <pre>npm run start</pre>
          </li>
        </ol>

        <p className="mt-4">
          The app when built for production will break, however you will find it works perfectly
          when running for development.
        </p>
      </div>
    </div>
  )
}
