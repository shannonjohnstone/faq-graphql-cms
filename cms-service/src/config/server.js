import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const { URL, PORT, ENDPOINT } = process.env

const start = (() => express)()

const config = {
  URL,
  PORT,
  ENDPOINT,
}

export { start, config }
