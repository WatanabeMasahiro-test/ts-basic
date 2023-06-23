export default async function asyncAwaitSample() {
  const url = "https://api.github.com/users/WatanabeMasahiro-test"

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {

    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log("Asynchronous async/await Sample 777:", json)
    } catch(err) {
      console.error(err)
      return null
    }

    const response = await fetch(url) // async/awaitを使って同期的に処理した結果がresponse
      .then((res) => res)
      .catch((error => {
        console.error(error)
        return null
      }))

    if(!response) {
      return null
    }

    const json = await response.json()  // responseを使ってerrorやnullのないデータがjson
      .then((json: Profile) => {
        console.log("Asynchronous async/await Sample 1:", json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })

      if(!json) {
        return null
      }

      return json
  }

  const profile = await fetchProfile()
  if(profile) {
    console.log("Asynchronous async/await Sample 2:", profile)
  }


  try {
    const response = await fetch(url)
    const json = await response.json()
    console.log("Asynchronous async/await Sample 888:", json)
  } catch(err) {
    console.error(err)
    return null
  }
}