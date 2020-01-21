import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'



export default () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState('')
  const [coords, setCoords] = useState({})

  const ifError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`)
    setCoords({ lat: 34.0522, lon: 118.2437 })
  }

  const ifSuccess = (pos) => {
    setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude })
  }
  const options = {
    maximumAge: 0,
    timeout: 4500,
    enableHighAccuracy: true
  }
  const fetchLocation = async () => {
    navigator.geolocation.getCurrentPosition(ifSuccess, ifError, options)
  }


  const searchApi = async (searchTerm) => {
    const params = {
      limit: 40,
      term: searchTerm,
      open_now: true,
      sort_by: 'rating'
    }
    try {
      if (!coords.lat) {
        params.location = 'Atlanta, GA'
      } else {
        params.latitude = coords.lat
        params.longitude = coords.lon
      }
      const res = await yelp.get('/search', {
        params
      })
      setError('')
      setResults(res.data.businesses)
    } catch (err) {
      setError('We could not find your location')
    }
  }

  const initializeSearch = async () => {
    await fetchLocation()
    searchApi('burger')
  }
  useEffect(() => {
    initializeSearch()
  }, [])

  return [results, error, searchApi]
}
