import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import { AccountCircle } from "@mui/icons-material";
import NavBar_Admin from "./NavBar_Admin";
import { useNavigate } from "react-router-dom";
import Js1EnglishData from "./Js1LearningArea/Js1EnglishData";
import Js1EconsTopic1 from "./Js1LearningArea/Js1EconomicsTopic1";
import Js1EconsTopic1Test from "./Js1LearningArea/Js1EconsTopic1Test";
import Js1EngTopicOneToOne from "./Js1LearningArea/Js1EngTopicOneToOne";
import Js1EngTest2 from "./Js1LearningArea/Js1EngTest2";
import Js1EngTest3 from "./Js1LearningArea/Js1EngTest3";
import Js1EngTest1 from "./Js1LearningArea/Js1EngTest1";
import axios from "axios";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import Sidebar_Nav from "./Admin/Dropdown/Sidebar_Nav";
import Jss1Econs from "./Admin/Exams/Jss1Econs";
import Progress_Chart from "./Progress_Chart";
import EconomicsSession from "./Admin/Media/EconomicsSession";
import Galary from "./Admin/Media/Galary";
import AlertMessages from "./Admin/AlertMessages/AlertMessages";
import Books from "./Admin/Books/Books";

const Homepage_Admin = ({ updateScore }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // const token = localStorage.getItem('token');
        const token = Cookies.get("token");
        console.log({ token });
        if (token) {
          navigate("/Homepage_Admin");
          return;
        }
        const response = await axios.get(
          "http://localhost:5000/auth/verify?page=Homepage_Admin",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Verify response:", response.data);
        if (response.data.status === true) {
          navigate("/Homepage_Admin");
        } else {
          navigate("/Login_Student");
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        if (error.response) {
          console.error("Server response:", error.response.data);
        }

        navigate("/Login_Student");
      }
    };

    verifyUser();
  }, [navigate]);

  const [users, setUsers] = useState([])

  // useEffect(() => {
  //   const fetchUserProgress = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/users-progress')
  //       setUsers(response.data)
  //     } catch (error) {
  //       console.error('Error fetching user progress:', error)
  //     }
  //   }
  //   fetchUserProgress()
  // }, [])

  // useState for Exams
  const [isRotatedClick, setIsRotatedClick] = useState(false);
  const [isRotatedClickJSS1, setIsRotatedClickJSS1] = useState(false);
  const [isRotatedClickJSS2, setIsRotatedClickJSS2] = useState(false);
  const [isRotatedClickJSS3, setIsRotatedClickJSS3] = useState(false);
  const [isRotatedClickSSS1, setIsRotatedClickSSS1] = useState(false);
  const [isRotatedClickSSS2, setIsRotatedClickSSS2] = useState(false);
  const [isRotatedClickSSS3, setIsRotatedClickSSS3] = useState(false);
  const [isRotatedClicstudentname, setIsRotatedClicstudentname] =
    useState(false);
  const [isRotatedClicstudentnameJSS2, setIsRotatedClicstudentnameJSS2] =
    useState(false);
  const [isRotatedClicstudentnameJSS3, setIsRotatedClicstudentnameJSS3] =
    useState(false);
    const [isRotatedClicstudentnameSSS1, setIsRotatedClicstudentnameSSS1] =
    useState(false);
    const [isRotatedClicstudentnameSSS2, setIsRotatedClicstudentnameSSS2] =
    useState(false);
    const [isRotatedClicstudentnameSSS3, setIsRotatedClicstudentnameSSS3] =
    useState(false);
  const [isRotatedClicsubject01, setIsRotatedClicsubject01] = useState(false);
  const [isRotatedCli, setIsRotatedCli] = useState(false);

  const [showAdditionalArrow, setShowAdditionalArrow] = useState(false);
  const [showAdditionalArrow3, setShowAdditionalArrow3] = useState(false);
  const [showAdditionalArroJSS1, setShowAdditionalArroJSS1] = useState(false);
  const [showAdditionalArroJSS2, setShowAdditionalArroJSS2] = useState(false);
  const [showAdditionalArroJSS3, setShowAdditionalArroJSS3] = useState(false);
  const [showAdditionalArroSSS1, setShowAdditionalArroSSS1] = useState(false);
  const [showAdditionalArroSSS2, setShowAdditionalArroSSS2] = useState(false);
  const [showAdditionalArroSSS3, setShowAdditionalArroSSS3] = useState(false);
  const [showAdditionalArrostudentname, setShowAdditionalArrostudentname] =
    useState(false);
  const [showAdditionalArrosubject01, setShowAdditionalArrosubject01] =
    useState(false);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setIsRotatedClick(!isRotatedClick);
    setShowAdditionalArrow(!showAdditionalArrow);
    setShowAdditionalArrow3(!showAdditionalArrow3);
    setIsRotatedClickJSS1(false);
    setIsRotatedClickJSS2(false);
    setIsRotatedClickJSS3(false);
    setIsRotatedClickSSS1(false);
    setIsRotatedClickSSS2(false);
    setIsRotatedClickSSS3(false);
    setIsRotatedClicstudentname(false);
    setIsRotatedClicstudentnameJSS2(false);
    setIsRotatedClicstudentnameJSS3(false);
    setIsRotatedClicstudentnameSSS1(false);
    setIsRotatedClicstudentnameSSS2(false);
    setIsRotatedClicstudentnameSSS3(false);
    setShowAdditionalArroJSS1(false);
    setShowAdditionalArroJSS2(false);
    setShowAdditionalArroJSS3(false);
    setShowAdditionalArroSSS1(false);
    setShowAdditionalArroSSS2(false);
    setShowAdditionalArroSSS3(false);

  };

  const handleClickJSS1 = () => {
    setIsRotatedClickJSS1((prevState) => !prevState);
    setShowAdditionalArroJSS1((prevState) => !prevState);

  };

  const handleClickJSS2 = () => {
    setIsRotatedClickJSS2((prevState) => !prevState);
    setShowAdditionalArroJSS2((prevState) => !prevState);
  };

  const handleClickJSS3 = () => {
    setIsRotatedClickJSS3((prevState) => !prevState);
    setShowAdditionalArroJSS3((prevState) => !prevState);
  };

  const handleClickSSS1 = () => {
    setIsRotatedClickSSS1((prevState) => !prevState);
    setShowAdditionalArroSSS1((prevState) => !prevState);
  };

  const handleClickSSS2 = () => {
    setIsRotatedClickSSS2((prevState) => !prevState);
    setShowAdditionalArroSSS2((prevState) => !prevState);
  };

  const handleClickSSS3 = () => {
    setIsRotatedClickSSS3((prevState) => !prevState);
    setShowAdditionalArroSSS3((prevState) => !prevState);
  };

  const handleClicstudentname = () => {
    setIsRotatedClicstudentname((prevState) => !prevState);
  };

  const handleClicstudentnameJSS2 = () => {
    setIsRotatedClicstudentnameJSS2((prevState) => !prevState);
  };

  const handleClicstudentnameJSS3 = () => {
    setIsRotatedClicstudentnameJSS3((prevState) => !prevState);
  };

  const handleClicstudentnameSSS1 = () => {
    setIsRotatedClicstudentnameSSS1((prevState) => !prevState);
  };


  const handleClicstudentnameSSS2 = () => {
    setIsRotatedClicstudentnameSSS2((prevState) => !prevState);
  };

  const handleClicstudentnameSSS3 = () => {
    setIsRotatedClicstudentnameSSS3((prevState) => !prevState);
  };



  //useState for One-To-One section

  const [isRotatedOneToOneClick, setIsRotatedOneToOneClick] = useState(false);
  const [isRotatedOneToOneClickJSS1, setIsRotatedOneToOneClickJSS1] = useState(false);
  const [isRotatedOneToOneClickJSS2, setIsRotatedOneToOneClickJSS2] = useState(false);
  const [isRotatedOneToOneClickJSS3, setIsRotatedOneToOneClickJSS3] = useState(false);
  const [isRotatedOneToOneClickSSS1, setIsRotatedOneToOneClickSSS1] = useState(false);
  const [isRotatedOneToOneClickSSS2, setIsRotatedOneToOneClickSSS2] = useState(false);
  const [isRotatedOneToOneClickSSS3, setIsRotatedOneToOneClickSSS3] = useState(false);
  const [isRotatedOneToOneClicstudentname, setIsRotatedOneToOneClicstudentname] =
    useState(false);
  const [isRotatedOneToOneClicstudentnameJSS2, setIsRotatedOneToOneClicstudentnameJSS2] =
    useState(false);
  const [isRotatedOneToOneClicstudentnameJSS3, setIsRotatedOneToOneClicstudentnameJSS3] =
    useState(false);
    const [isRotatedOneToOneClicstudentnameSSS1, setIsRotatedOneToOneClicstudentnameSSS1] =
    useState(false);
    const [isRotatedOneToOneClicstudentnameSSS2, setIsRotatedOneToOneClicstudentnameSSS2] =
    useState(false);
    const [isRotatedOneToOneClicstudentnameSSS3, setIsRotatedOneToOneClicstudentnameSSS3] =
    useState(false);
  const [isRotatedOneToOneClicsubject01, setIsRotatedOneToOneClicsubject01] = useState(false);
  const [isRotatedOneToOneCli, setIsRotatedOneToOneCli] = useState(false);

  const [showAdditionalOneToOneArrow, setShowAdditionalOneToOneArrow] = useState(false);
  const [showAdditionalOneToOneArrow3, setShowAdditionalOneToOneArrow3] = useState(false);
  const [showAdditionalOneToOneArroJSS1, setShowAdditionalOneToOneArroJSS1] = useState(false);
  const [showAdditionalOneToOneArroJSS2, setShowAdditionalOneToOneArroJSS2] = useState(false);
  const [showAdditionalOneToOneArroJSS3, setShowAdditionalOneToOneArroJSS3] = useState(false);
  const [showAdditionalOneToOneArroSSS1, setShowAdditionalOneToOneArroSSS1] = useState(false);
  const [showAdditionalOneToOneArroSSS2, setShowAdditionalOneToOneArroSSS2] = useState(false);
  const [showAdditionalOneToOneArroSSS3, setShowAdditionalOneToOneArroSSS3] = useState(false);
  const [showAdditionalOneToOneArrostudentname, setShowAdditionalOneToOneArrostudentname] =
    useState(false);
  const [showAdditionalOneToOneArrosubject01, setShowAdditionalOneToOneArrosubject01] =
    useState(false);

  const [openOneToOne, setOpenOneToOne] = useState(false);

  const handleOneToOneClick = () => {
    setIsRotatedOneToOneClick(!isRotatedOneToOneClick);
    setShowAdditionalOneToOneArrow(!showAdditionalOneToOneArrow);
    setShowAdditionalOneToOneArrow3(!showAdditionalOneToOneArrow3);
    setIsRotatedOneToOneClickJSS1(false);
    setIsRotatedOneToOneClickJSS2(false);
    setIsRotatedOneToOneClickJSS3(false);
    setIsRotatedOneToOneClickSSS1(false);
    setIsRotatedOneToOneClickSSS2(false);
    setIsRotatedOneToOneClickSSS3(false);
    setIsRotatedOneToOneClicstudentname(false);
    setIsRotatedOneToOneClicstudentnameJSS2(false);
    setIsRotatedOneToOneClicstudentnameJSS3(false);
    setIsRotatedOneToOneClicstudentnameSSS1(false);
    setIsRotatedOneToOneClicstudentnameSSS2(false);
    setIsRotatedOneToOneClicstudentnameSSS3(false);
    setShowAdditionalOneToOneArroJSS1(false);
    setShowAdditionalOneToOneArroJSS2(false);
    setShowAdditionalOneToOneArroJSS3(false);
    setShowAdditionalOneToOneArroSSS1(false);
    setShowAdditionalOneToOneArroSSS2(false);
    setShowAdditionalOneToOneArroSSS3(false);

  };

  const handleOneToOneClickJSS1 = () => {
    setIsRotatedOneToOneClickJSS1((prevState) => !prevState);
    setShowAdditionalOneToOneArroJSS1((prevState) => !prevState);

  };

  const handleOneToOneClickJSS2 = () => {
    setIsRotatedOneToOneClickJSS2((prevState) => !prevState);
    setShowAdditionalOneToOneArroJSS2((prevState) => !prevState);
  };

  const handleOneToOneClickJSS3 = () => {
    setIsRotatedOneToOneClickJSS3((prevState) => !prevState);
    setShowAdditionalOneToOneArroJSS3((prevState) => !prevState);
  };

  const handleOneToOneClickSSS1 = () => {
    setIsRotatedOneToOneClickSSS1((prevState) => !prevState);
    setShowAdditionalOneToOneArroSSS1((prevState) => !prevState);
  };

  const handleOneToOneClickSSS2 = () => {
    setIsRotatedOneToOneClickSSS2((prevState) => !prevState);
    setShowAdditionalOneToOneArroSSS2((prevState) => !prevState);
  };

  const handleOneToOneClickSSS3 = () => {
    setIsRotatedOneToOneClickSSS3((prevState) => !prevState);
    setShowAdditionalOneToOneArroSSS3((prevState) => !prevState);
  };

  const handleOneToOneClicstudentname = () => {
    setIsRotatedOneToOneClicstudentname((prevState) => !prevState);
  };

  const handleOneToOneClicstudentnameJSS2 = () => {
    setIsRotatedOneToOneClicstudentnameJSS2((prevState) => !prevState);
  };

  const handleOneToOneClicstudentnameJSS3 = () => {
    setIsRotatedOneToOneClicstudentnameJSS3((prevState) => !prevState);
  };

  const handleOneToOneClicstudentnameSSS1 = () => {
    setIsRotatedOneToOneClicstudentnameSSS1((prevState) => !prevState);
  };


  const handleOneToOneClicstudentnameSSS2 = () => {
    setIsRotatedOneToOneClicstudentnameSSS2((prevState) => !prevState);
  };

  const handleOneToOneClicstudentnameSSS3 = () => {
    setIsRotatedOneToOneClicstudentnameSSS3((prevState) => !prevState);
  };


//useState for test
const [isRotatedTestClick, setIsRotatedTestClick] = useState(false);
const [isRotatedTestClickJSS1, setIsRotatedTestClickJSS1] = useState(false);
const [isRotatedTestClickJSS2, setIsRotatedTestClickJSS2] = useState(false);
const [isRotatedTestClickJSS3, setIsRotatedTestClickJSS3] = useState(false);
const [isRotatedTestClickSSS1, setIsRotatedTestClickSSS1] = useState(false);
const [isRotatedTestClickSSS2, setIsRotatedTestClickSSS2] = useState(false);
const [isRotatedTestClickSSS3, setIsRotatedTestClickSSS3] = useState(false);
const [isRotatedTestClicstudentname, setIsRotatedTestClicstudentname] =
  useState(false);
const [isRotatedTestClicstudentnameJSS2, setIsRotatedTestClicstudentnameJSS2] =
  useState(false);
const [isRotatedTestClicstudentnameJSS3, setIsRotatedTestClicstudentnameJSS3] =
  useState(false);
  const [isRotatedTestClicstudentnameSSS1, setIsRotatedTestClicstudentnameSSS1] =
  useState(false);
  const [isRotatedTestClicstudentnameSSS2, setIsRotatedTestClicstudentnameSSS2] =
  useState(false);
  const [isRotatedTestClicstudentnameSSS3, setIsRotatedTestClicstudentnameSSS3] =
  useState(false);
const [isRotatedTestClicsubject01, setIsRotatedTestClicsubject01] = useState(false);
const [isRotatedTestCli, setIsRotatedTestCli] = useState(false);

const [showAdditionalTestArrow, setShowAdditionalTestArrow] = useState(false);
const [showAdditionalTestArrow3, setShowAdditionalTestArrow3] = useState(false);
const [showAdditionalTestArroJSS1, setShowAdditionalTestArroJSS1] = useState(false);
const [showAdditionalTestArroJSS2, setShowAdditionalTestArroJSS2] = useState(false);
const [showAdditionalTestArroJSS3, setShowAdditionalTestArroJSS3] = useState(false);
const [showAdditionalTestArroSSS1, setShowAdditionalTestArroSSS1] = useState(false);
const [showAdditionalTestArroSSS2, setShowAdditionalTestArroSSS2] = useState(false);
const [showAdditionalTestArroSSS3, setShowAdditionalTestArroSSS3] = useState(false);
const [showAdditionalTestArrostudentname, setShowAdditionalTestArrostudentname] =
  useState(false);
const [showAdditionalTestArrosubject01, setShowAdditionalTestArrosubject01] =
  useState(false);

const [openTest, setOpenTest] = useState(false);

const handleTestClick = () => {
  setIsRotatedTestClick(!isRotatedTestClick);
  setShowAdditionalTestArrow(!showAdditionalTestArrow);
  setShowAdditionalTestArrow3(!showAdditionalTestArrow3);
  setIsRotatedTestClickJSS1(false);
  setIsRotatedTestClickJSS2(false);
  setIsRotatedTestClickJSS3(false);
  setIsRotatedTestClickSSS1(false);
  setIsRotatedTestClickSSS2(false);
  setIsRotatedTestClickSSS3(false);
  setIsRotatedTestClicstudentname(false);
  setIsRotatedTestClicstudentnameJSS2(false);
  setIsRotatedTestClicstudentnameJSS3(false);
  setIsRotatedTestClicstudentnameSSS1(false);
  setIsRotatedTestClicstudentnameSSS2(false);
  setIsRotatedTestClicstudentnameSSS3(false);
  setShowAdditionalTestArroJSS1(false);
  setShowAdditionalTestArroJSS2(false);
  setShowAdditionalTestArroJSS3(false);
  setShowAdditionalTestArroSSS1(false);
  setShowAdditionalTestArroSSS2(false);
  setShowAdditionalTestArroSSS3(false);

};

const handleTestClickJSS1 = () => {
  setIsRotatedTestClickJSS1((prevState) => !prevState);
  setShowAdditionalTestArroJSS1((prevState) => !prevState);

};

const handleTestClickJSS2 = () => {
  setIsRotatedTestClickJSS2((prevState) => !prevState);
  setShowAdditionalTestArroJSS2((prevState) => !prevState);
};

const handleTestClickJSS3 = () => {
  setIsRotatedTestClickJSS3((prevState) => !prevState);
  setShowAdditionalTestArroJSS3((prevState) => !prevState);
};

const handleTestClickSSS1 = () => {
  setIsRotatedTestClickSSS1((prevState) => !prevState);
  setShowAdditionalTestArroSSS1((prevState) => !prevState);
};

const handleTestClickSSS2 = () => {
  setIsRotatedTestClickSSS2((prevState) => !prevState);
  setShowAdditionalTestArroSSS2((prevState) => !prevState);
};

const handleTestClickSSS3 = () => {
  setIsRotatedTestClickSSS3((prevState) => !prevState);
  setShowAdditionalTestArroSSS3((prevState) => !prevState);
};

const handleTestClicstudentname = () => {
  setIsRotatedTestClicstudentname((prevState) => !prevState);
};

const handleTestClicstudentnameJSS2 = () => {
  setIsRotatedTestClicstudentnameJSS2((prevState) => !prevState);
};

const handleTestClicstudentnameJSS3 = () => {
  setIsRotatedTestClicstudentnameJSS3((prevState) => !prevState);
};

const handleTestClicstudentnameSSS1 = () => {
  setIsRotatedTestClicstudentnameSSS1((prevState) => !prevState);
};


const handleTestClicstudentnameSSS2 = () => {
  setIsRotatedTestClicstudentnameSSS2((prevState) => !prevState);
};

const handleTestClicstudentnameSSS3 = () => {
  setIsRotatedTestClicstudentnameSSS3((prevState) => !prevState);
};




{/* media section */}
{/* files that handles the session videos */}
//useState for Media

const [isRotatedMediaClick, setIsRotatedMediaClick] = useState(false);
const [isRotatedMediaClickJSS1, setIsRotatedMediaClickJSS1] = useState(false);
const [isRotatedMediaClickJSS2, setIsRotatedMediaClickJSS2] = useState(false);
const [isRotatedMediaClickJSS3, setIsRotatedMediaClickJSS3] = useState(false);
const [isRotatedMediaClickSSS1, setIsRotatedMediaClickSSS1] = useState(false);
const [isRotatedMediaClickSSS2, setIsRotatedMediaClickSSS2] = useState(false);
const [isRotatedMediaClickSSS3, setIsRotatedMediaClickSSS3] = useState(false);
const [isRotatedMediaClic, setIsRotatedMediaClic] =
  useState(false);
const [isRotatedMediaClicJSS2, setIsRotatedMediaClicJSS2] =
  useState(false);
const [isRotatedMediaClicJSS3, setIsRotatedMediaClicJSS3] =
  useState(false);
  const [isRotatedMediaClicSSS1, setIsRotatedMediaClicSSS1] =
  useState(false);
  const [isRotatedMediaClicSSS2, setIsRotatedMediaClicSSS2] =
  useState(false);
  const [isRotatedMediaClicSSS3, setIsRotatedMediaClicSSS3] =
  useState(false);
// const [isRotatedClicsubject01, setIsRotatedClicsubject01] = useState(false);
// const [isRotatedCli, setIsRotatedCli] = useState(false);

const [showAdditionalMediaArrow, setShowAdditionalMediaArrow] = useState(false);
const [showAdditionalMediaArrow3, setShowAdditionalMediaArrow3] = useState(false);
const [showAdditionalMediaArroJSS1, setShowAdditionalMediaArroJSS1] = useState(false);
const [showAdditionalMediaArroJSS2, setShowAdditionalMediaArroJSS2] = useState(false);
const [showAdditionalMediaArroJSS3, setShowAdditionalMediaArroJSS3] = useState(false);
const [showAdditionalMediaArroSSS1, setShowAdditionalMediaArroSSS1] = useState(false);
const [showAdditionalMediaArroSSS2, setShowAdditionalMediaArroSSS2] = useState(false);
const [showAdditionalMediaArroSSS3, setShowAdditionalMediaArroSSS3] = useState(false);
const [showAdditionalMediaArro, setShowAdditionalMediaArro] =
  useState(false);
// const [showAdditionalArrosubject01, setShowAdditionalArrosubject01] =
//   useState(false);

const [openMedia, setOpenMedia] = useState(false);

const handleMediaClick = () => {
  setIsRotatedMediaClick(!isRotatedMediaClick);
  setShowAdditionalMediaArrow(!showAdditionalMediaArrow);
  setShowAdditionalMediaArrow3(!showAdditionalMediaArrow3);
  setIsRotatedMediaClickJSS1(false);
  setIsRotatedMediaClickJSS2(false);
  setIsRotatedMediaClickJSS3(false);
  setIsRotatedMediaClickSSS1(false);
  setIsRotatedMediaClickSSS2(false);
  setIsRotatedMediaClickSSS3(false);
  setIsRotatedMediaClic(false);
  setIsRotatedMediaClicJSS2(false);
  setIsRotatedMediaClicJSS3(false);
  setIsRotatedMediaClicSSS1(false);
  setIsRotatedMediaClicSSS2(false);
  setIsRotatedMediaClicSSS3(false);
  setShowAdditionalMediaArroJSS1(false);
  setShowAdditionalMediaArroJSS2(false);
  setShowAdditionalMediaArroJSS3(false);
  setShowAdditionalMediaArroSSS1(false);
  setShowAdditionalMediaArroSSS2(false);
  setShowAdditionalMediaArroSSS3(false);

};

const handleMediaClickJSS1 = () => {
  setIsRotatedMediaClickJSS1((prevState) => !prevState);
  setShowAdditionalMediaArroJSS1((prevState) => !prevState);

};

const handleMediaClickJSS2 = () => {
  setIsRotatedMediaClickJSS2((prevState) => !prevState);
  setShowAdditionalMediaArroJSS2((prevState) => !prevState);
};

const handleMediaClickJSS3 = () => {
  setIsRotatedMediaClickJSS3((prevState) => !prevState);
  setShowAdditionalMediaArroJSS3((prevState) => !prevState);
};

const handleMediaClickSSS1 = () => {
  setIsRotatedMediaClickSSS1((prevState) => !prevState);
  setShowAdditionalMediaArroSSS1((prevState) => !prevState);
};

const handleMediaClickSSS2 = () => {
  setIsRotatedMediaClickSSS2((prevState) => !prevState);
  setShowAdditionalMediaArroSSS2((prevState) => !prevState);
};

const handleMediaClickSSS3 = () => {
  setIsRotatedMediaClickSSS3((prevState) => !prevState);
  setShowAdditionalMediaArroSSS3((prevState) => !prevState);
};

const handleMediaClic = () => {
  setIsRotatedMediaClic((prevState) => !prevState);
};

const handleMediaClicJSS2 = () => {
  setIsRotatedMediaClicJSS2((prevState) => !prevState);
};

const handleMediaClicJSS3 = () => {
  setIsRotatedMediaClicJSS3((prevState) => !prevState);
};

const handleMediaClicSSS1 = () => {
  setIsRotatedMediaClicSSS1((prevState) => !prevState);
};


const handleMediaClicSSS2 = () => {
  setIsRotatedMediaClicSSS2((prevState) => !prevState);
};

const handleMediaClicSSS3 = () => {
  setIsRotatedMediaClicSSS3((prevState) => !prevState);
};





  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const [activeTab, setActiveTab] = useState("Tab1");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    handleClose(); // Close the Offcanvas component when a tab button is clicked
  };

  const tabContent = {
    Tab1: <Jss1Econs />,
    Tab1Js1EngTest1: <Js1EngTest1 updateScore={updateScore} />,
    Tab2Js1EngTest2: <Js1EngTest2 updateScore={updateScore} />,
    Tab3Js1EngTest3: <Js1EngTest3 updateScore={updateScore} />,
    Tab4OneToOne: <Js1EngTopicOneToOne updateScore={updateScore} />,
    JSS1: <Sidebar_Nav />,


    // for media
    EconomicsMedia: <EconomicsSession />,

    // Galaxy
    Galary: < Galary />,

    // Alert Messages
    AlertMessages: <AlertMessages />,

    //BOOKS
    Books: <Books />

    // Tab5:  <Js1EconsTopic1 />,
    // Tab6:  <Js1EconsTopic1 />,
  };

  const js1English = Js1EnglishData[0];

  return (
    <div>
      <div>
        <NavBar_Admin />
      </div>
      <div className="blankSpace"></div>

      <div className="Side-Bar-Nav">
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header className="Offcanvas" closeButton>
            <Offcanvas.Title className="card-body1">
              <h5>MENU</h5>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>

            <div className="Side-menue-admin">
              <div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedClick ? "rotated" : ""
                  }`}
                  onClick={handleClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">Exams</p>
                </div>
              </div>

              {showAdditionalArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}

              {showAdditionalArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button onClick={() => handleTabClick("Tab1")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Tab1" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">economics</p>
                      </button>
                    )}
                  </div>                  
                
             

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalArroJSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameJSS2 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameJSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickJSS3 ? "rotated" : ""
                    }`}
                    onClick={handleClickJSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS3</p>
                </div>
              )}
              {showAdditionalArroJSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameJSS3 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameJSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickSSS1 ? "rotated" : ""
                    }`}
                    onClick={handleClickSSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS1</p>
                </div>
              )}
              {showAdditionalArroSSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameSSS1 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameSSS1}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickSSS2 ? "rotated" : ""
                    }`}
                    onClick={handleClickSSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS2</p>
                </div>
              )}
              {showAdditionalArroSSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameSSS2 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameSSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickSSS3 ? "rotated" : ""
                    }`}
                    onClick={handleClickSSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS3</p>
                </div>
              )}
              {showAdditionalArroSSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameSSS3 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameSSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}




{/* section for Test useState Controls */}
              <div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedTestClick ? "rotated" : ""
                  }`}
                  onClick={handleTestClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">Test</p>
                </div>
              </div>

              {showAdditionalTestArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}
              {showAdditionalTestArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalTestArroJSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameJSS2 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameJSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickJSS3 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickJSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS3</p>
                </div>
              )}
              {showAdditionalTestArroJSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameJSS3 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameJSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickSSS1 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickSSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS1</p>
                </div>
              )}
              {showAdditionalTestArroSSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameSSS1 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameSSS1}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickSSS2 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickSSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS2</p>
                </div>
              )}
              {showAdditionalTestArroSSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameSSS2 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameSSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickSSS3 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickSSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS3</p>
                </div>
              )}
              {showAdditionalTestArroSSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameSSS3 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameSSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}



{/* One-To-One Section */}
              <div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedOneToOneClick ? "rotated" : ""
                  }`}
                  onClick={handleOneToOneClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">One-To-One</p>
                </div>
              </div>


{/* One-To-One Class JSS1 */}
              {showAdditionalOneToOneArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedOneToOneClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleOneToOneClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}


{/* Student Name Section with subject  */}
              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


{/* One-To-One Class JSS2 */}
              {showAdditionalOneToOneArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedOneToOneClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleOneToOneClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


{/* One-To-One Class JSS3 */}
              {showAdditionalOneToOneArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedOneToOneClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleOneToOneClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}



{/* media section */}
{/* files that handles the session videos */}

<div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedMediaClick ? "rotated" : ""
                  }`}
                  onClick={handleMediaClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">Media</p>
                </div>
              </div>

              {showAdditionalMediaArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}

              {showAdditionalMediaArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClic ? "rotated" : ""
                      }`}
                      onClick={handleMediaClic}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button onClick={() => handleTabClick("EconomicsMedia")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "EconomicsMedia" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">economics</p>
                      </button>
                    )}
                  </div>                  
                
             

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalMediaArroJSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicJSS2 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicJSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickJSS3 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickJSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS3</p>
                </div>
              )}
              {showAdditionalMediaArroJSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicJSS3 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicJSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickSSS1 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickSSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS1</p>
                </div>
              )}
              {showAdditionalMediaArroSSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicSSS1 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicSSS1}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickSSS2 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickSSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS2</p>
                </div>
              )}
              {showAdditionalMediaArroSSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicSSS2 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicSSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickSSS3 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickSSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS3</p>
                </div>
              )}
              {showAdditionalMediaArroSSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicSSS3 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicSSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


{/* Galary */}

<div className="dropdown-alert">
<button onClick={() => handleTabClick("Galary")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Galary" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">Galary</p>
                      </button>
                
              </div>


{/* ALERT MESSAGE SECTION */}
{/*General Alert Message */}

<div className="dropdown-alert">
<button onClick={() => handleTabClick("AlertMessages")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Galary" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">Alert Message</p>
                      </button>                
              </div>

<div className="dropdown-alert">
<button onClick={() => handleTabClick("Books")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Galary" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">Books</p>
                      </button>
                      </div>


            </div>

          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* card section for PC screen */}
      <div className="bodybody">
      <div className="Side-bar-Admin">
        <div className="Side-Bar-Inside-Container">
        <div className="Side-bar-Admin-body">
          <div
            style={{
              width: "15rem",
              margin: "10px",
              textAlign: "center",
              lineHeight: "10px",
            }}
          >
            <h5>Menu</h5>


{/* section for Exams useState Controls */}
            <div className="Side-menue-admin">
              <div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedClick ? "rotated" : ""
                  }`}
                  onClick={handleClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">Exams</p>
                </div>
              </div>

              {showAdditionalArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}

              {showAdditionalArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button onClick={() => handleTabClick("Tab1")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Tab1" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">economics</p>
                      </button>
                    )}
                  </div>                  
                
             

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalArroJSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameJSS2 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameJSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickJSS3 ? "rotated" : ""
                    }`}
                    onClick={handleClickJSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS3</p>
                </div>
              )}
              {showAdditionalArroJSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameJSS3 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameJSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickSSS1 ? "rotated" : ""
                    }`}
                    onClick={handleClickSSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS1</p>
                </div>
              )}
              {showAdditionalArroSSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameSSS1 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameSSS1}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickSSS2 ? "rotated" : ""
                    }`}
                    onClick={handleClickSSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS2</p>
                </div>
              )}
              {showAdditionalArroSSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameSSS2 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameSSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedClickSSS3 ? "rotated" : ""
                    }`}
                    onClick={handleClickSSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS3</p>
                </div>
              )}
              {showAdditionalArroSSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedClicstudentnameSSS3 ? "rotated" : ""
                      }`}
                      onClick={handleClicstudentnameSSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}




{/* section for Test useState Controls */}
              <div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedTestClick ? "rotated" : ""
                  }`}
                  onClick={handleTestClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">Test</p>
                </div>
              </div>

              {showAdditionalTestArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}
              {showAdditionalTestArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalTestArroJSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameJSS2 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameJSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickJSS3 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickJSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS3</p>
                </div>
              )}
              {showAdditionalTestArroJSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameJSS3 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameJSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickSSS1 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickSSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS1</p>
                </div>
              )}
              {showAdditionalTestArroSSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameSSS1 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameSSS1}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickSSS2 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickSSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS2</p>
                </div>
              )}
              {showAdditionalTestArroSSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameSSS2 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameSSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalTestArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedTestClickSSS3 ? "rotated" : ""
                    }`}
                    onClick={handleTestClickSSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS3</p>
                </div>
              )}
              {showAdditionalTestArroSSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedTestClicstudentnameSSS3 ? "rotated" : ""
                      }`}
                      onClick={handleTestClicstudentnameSSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedTestClicstudentnameSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}



{/* One-To-One Section */}
              <div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedOneToOneClick ? "rotated" : ""
                  }`}
                  onClick={handleOneToOneClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">One-To-One</p>
                </div>
              </div>


{/* One-To-One Class JSS1 */}
              {showAdditionalOneToOneArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedOneToOneClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleOneToOneClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}


{/* Student Name Section with subject  */}
              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


{/* One-To-One Class JSS2 */}
              {showAdditionalOneToOneArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedOneToOneClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleOneToOneClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


{/* One-To-One Class JSS3 */}
              {showAdditionalOneToOneArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedOneToOneClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleOneToOneClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 1</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalOneToOneArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedOneToOneClicstudentname ? "rotated" : ""
                      }`}
                      onClick={handleOneToOneClicstudentname}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Student Name 2</p>
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedOneToOneClicstudentname && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}



{/* media section */}
{/* files that handles the session videos */}

<div className="dropdown-arrow">
                <button
                  className={`arrow-container ${
                    isRotatedMediaClick ? "rotated" : ""
                  }`}
                  onClick={handleMediaClick}
                >
                  <div className="arrow">
                    <div className="arrow-head"></div>
                  </div>
                </button>
                <div className="arrow-arrow-text-arrow">
                  <p className="arrow-arrow-text">Media</p>
                </div>
              </div>

              {showAdditionalMediaArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickJSS1 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickJSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS1</p>
                </div>
              )}

              {showAdditionalMediaArroJSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClic ? "rotated" : ""
                      }`}
                      onClick={handleMediaClic}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button onClick={() => handleTabClick("EconomicsMedia")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "EconomicsMedia" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">economics</p>
                      </button>
                    )}
                  </div>                  
                
             

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClic && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickJSS2 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickJSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS2</p>
                </div>
              )}
              {showAdditionalMediaArroJSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicJSS2 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicJSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickJSS3 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickJSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">JSS3</p>
                </div>
              )}
              {showAdditionalMediaArroJSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicJSS3 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicJSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicJSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickSSS1 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickSSS1}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS1</p>
                </div>
              )}
              {showAdditionalMediaArroSSS1 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicSSS1 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicSSS1}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS1 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickSSS2 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickSSS2}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS2</p>
                </div>
              )}
              {showAdditionalMediaArroSSS2 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicSSS2 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicSSS2}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS2 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {showAdditionalMediaArrow3 && (
                <div className="additional-arrow-container">
                  <button
                    className={`arrow-container ${
                      isRotatedMediaClickSSS3 ? "rotated" : ""
                    }`}
                    onClick={handleMediaClickSSS3}
                  >
                    <div className="arrow">
                      <div className="arrow-head"></div>
                    </div>
                  </button>
                  <p className="arrow-arrow-text">SSS3</p>
                </div>
              )}
              {showAdditionalMediaArroSSS3 && (
                <div>
                  <div className="student-name-additional-arrow-container">
                    <button
                      className={`arrow-container ${
                        isRotatedMediaClicSSS3 ? "rotated" : ""
                      }`}
                      onClick={handleMediaClicSSS3}
                    >
                      <div className="arrow">
                        <div className="arrow-head"></div>
                      </div>
                    </button>
                    <p className="arrow-arrow-text">Select Subject</p>
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>

                  <div>
                    {isRotatedMediaClicSSS3 && (
                      <button className="sucbject01-additional-arrow-container">
                        <p className="arrow-arrow-text">Subject01</p>
                      </button>
                    )}
                  </div>
                </div>
              )}


{/* Galary */}

<div className="dropdown-alert">
<button onClick={() => handleTabClick("Galary")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Galary" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">Galary</p>
                      </button>
                
              </div>


{/* ALERT MESSAGE SECTION */}
{/*General Alert Message */}

<div className="dropdown-alert">
<button onClick={() => handleTabClick("AlertMessages")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Galary" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">Alert Message</p>
                      </button>
                
              </div>


{/*BOOKS */}

<div className="dropdown-alert">
<button onClick={() => handleTabClick("Books")} 
                      className={`sucbject01-additional-arrow-container ${activeTab === "Galary" ? "active" : ""}`}>
                        <p className="arrow-arrow-text">Books</p>
                      </button>
                
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>

      {/* page writeup section */}

      <div className="herosection-Writeup">
        <div className="herosection-Page">{tabContent[activeTab]}</div>
      </div>
      </div>

<div className="AllFooter">
<div>
  <Progress_Chart 
  // users={users} 
  />
</div>

      <div className="Registered">
        <AccountCircle color="white" fontSize="large" />
        <p>REGISTERED</p>
        <h3>Numbers</h3>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="foot">
          <div className="foot1">
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
          </div>

          <div className="foot1">
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
          </div>

          <div className="foot1">
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
          </div>

          <div className="foot2">
            <p>
              ICT: SeeloveTechHub Nig. Ltd <br></br>+2348131264231<br></br>©
              2024 <br></br> All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
</div>
  );
};

export default Homepage_Admin;
