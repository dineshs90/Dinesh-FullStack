package main

import (
	"fmt"
	"log"
	"net/http"
)

// handling multiple urls in same function
func multiplehandler(w http.ResponseWriter, r *http.Request) {

	switch r.URL.Path {

	case "/":

		fmt.Fprintln(w, "Welcome !!! ")

	case "/health":
		fmt.Fprintln(w, "Server is healthy")

	default:
		http.NotFound(w, r)
		fmt.Fprintln(w, "Use the below path /health /greeting /welcome")

	}

}

//Handling multiple urls in separate function

func greetingHandler(w http.ResponseWriter, r *http.Request) {

	fmt.Fprintln(w, "Wishing you a great day ahead!")

}

func greetHandler(w http.ResponseWriter, r *http.Request) {

	fmt.Fprintln(w, "We're happy to have you here!", "Excited to connect with you!")

}

func main() {

	//declared port
	port := "8080"

	fmt.Printf("Server is running on http://localhost:%s\n", port)

	//Registered the handler function for path /
	http.HandleFunc("/", multiplehandler) // single handler calling is enought if we configured all path in single func.

	//separate step to call handlers
	http.HandleFunc("/greeting", greetingHandler)
	http.HandleFunc("/welcome", greetHandler)

	//fmt.Println("Server started serving the request ...")

	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal(err)
		fmt.Println("Error in starting the server !!!")
	}

}
