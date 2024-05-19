import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./Progress_Chart.css"

function Progress_Chart() {
  const progress1 = 10;
  const progress2 = 20;
  const progress3 = 45;

  const totalProgress = progress1 + progress2 + progress3;

  // Determine the progress bar color based on the total progress
  let progressBarVariant = 'danger';
  if (totalProgress >= 50) {
    progressBarVariant = 'warning';
  }
  if (totalProgress >= 75) {
    progressBarVariant = 'success';
  }

  return (
    <div>
      <h4>Student Progress Bar</h4>
        <ProgressBar>
          student name {totalProgress}%
          <ProgressBar animated variant={progressBarVariant} now={progress1} key={3} />
          <ProgressBar animated variant={progressBarVariant} now={progress2} key={2} />
          <ProgressBar animated variant={progressBarVariant} now={progress3} key={1} />
        </ProgressBar>
      
      </div>

  )
}

export default Progress_Chart







// import React from 'react'
// import ProgressBar from 'react-bootstrap/ProgressBar';

// function Progress_Chart({ users }) {
//   return (
//     <div>
//       <h4>Registered User Progress</h4>
//       {users.map((user, index) => (
//         <div key={index}>
//           <h5>{user.Username}</h5>
//           <ProgressBar variant="success" now={user.activePercentage} label={`Active: ${user.activePercentage.toFixed(50)}%`} />
//           <ProgressBar variant="info" now={user.inactivePercentage} label={`Inactive: ${user.inactivePercentage.toFixed(50)}%`} />
//           <ProgressBar variant="warning" now={user.suspendedPercentage} label={`Suspended: ${user.suspendedPercentage.toFixed(50)}%`} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Progress_Chart