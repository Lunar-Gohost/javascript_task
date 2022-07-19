
function taskFunction(){
    const taskList = [[1,10,1],[2,50,2],[3,25,0],[4,69,1]];

// #pickle
//     pickle_out = open("taskList.pickle", "wb")
//     pickle.dump(taskList, pickle_out)
//     pickle_out.close()
//     print("Finished","\n")


//     #unpickle
//     pickle_in = open("taskList.pickle", "rb")
//     taskList = pickle.load(pickle_in)
   
console.log(taskList);
    const task = prompt("Please select a task. ");
    // if need translate to js.  task = int(task)
    console.log("Selected" ,taskList[task-1][0]);
   
    if (taskList[task-1][2] == 0){
        status = 'open';
    }
    if (taskList[task-1][2] == 1){
        status == "In progress";
    }
    if (taskList[task-1][2] == 2){
        status == "Closed"   
    }

    console.log("---------------------");
    console.log(" Task selected:",taskList[task-1][0],"\n","Reward:",taskList[task-1][1],"\n","Status:",status);
    console.log("---------------------","\n");

    if (status == "In Progress"){
        const taskPermission = prompt("Do you want to vote for completion of this task? [y/n] ")
        if (taskPermission == "y"){
            listLength = item_list_counter(taskList)
            callVoting = voting(listLength, token_wallet)
            if (callVoting == "pass"){
                taskList[task-1][2] = '2'
                console.log(taskList);
            }
        }
    }
}

function voting (number_of_task, token_wallet_voting){
    postive_vote=0
    negitve_vote=0
    vote_test1="fail"

    if (token_wallet_voting<=0){
        console.log("You can't vote.")
        return
    }
    if (token_wallet_voting>=1){
        while (vote_test1 =="fail"){
            const vote_choice = prompt ("Do you wish for this action to pass [y/n] ")
            if (vote_choice == "y" || vote_choice == "n"){
                vote_test1 == "pass"
            }
            else {
                print("Please input y or n")
            }
        if (vote_choice == "y"){
            postive_vote = postive_vote + token_wallet_voting
        }
        else{
            negitve_vote = negitve_vote + token_wallet_voting
        }
        if (postive_vote>negitve_vote){
            vote_status = "pass"
        }
        else {
            vote_status = "fail"
        }
        return (vote_status)
        }
    }
}

function item_list_counter(list_ilc){
    list_count=list(list_ilc)
    for ( let i in range(0, len(list_count))){
        if (i == (len(list_count)-1)){
            last_number=i+1
            return(last_number)
        }
    }
}

function create_proposal(){
    
    //is the pickle


    // proposal_creation = 'proposalsList.pickle'

    // proposal_list = []

    // # first time you run this, "Preposals.dat" won't exist
    // #   so we need to check for its existence before we load 
    // #   our "database"
    // if os.path.exists(proposal_creation):
    //     # "with" statements are very handy for opening files. 
    //     with open(proposal_creation,'rb') as rfp: 
    //         proposal_list = pickle.load(rfp)
    //     # Notice that there's no "rfp.close()"
    //     #   ... the "with" clause calls close() automatically! 

    // username = input("Please enter your user name:")
    // user_proposal = input("Please enter your proposal:")

    // new_proposal = username, user_proposal
    // proposal_list.append(new_proposal)

    // #pickle
    // pickle_out = open("proposalsList.pickle", "wb")
    // pickle.dump(proposal_creation, pickle_out)
    // pickle_out.close()
    // print("Finished","\n")


    // #unpickle
    // pickle_in = open("proposalsList.pickle", "rb")
    // taskList = pickle.load(pickle_in) 
    console.log(proposal_list)
    return
}

token_wallet = 10000000000000000

selection = prompt ("\n Please select a number \n 1) View tasks and vote \n 2) Make a Proposal \n")

if (selection == "1"){
    call_taskFunction = taskFunction()
}
if (selection == "2"){
    call_create_proposal = create_proposal()
}