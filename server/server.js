const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/auth/auth-routes');
const attendanceRouter = require('./routes/common/attendance-routes');
const leaveRouter = require('./routes/common/leaveApplication-routes');

const WarningRouter = require('./routes/common/warning-routes');
const TerminateRouter = require('./routes/common/terminate-routes');
const ResignationRouter = require('./routes/common/resignation-routes');

const AdddataRouter = require('./routes/tstl/adddata-routes');
const AssignPackageRouter = require('./routes/tstl/assignPackage-routes');



const ServicesRouter = require('./routes/admin/services-routes');
const PackagesRouter = require('./routes/admin/package-routes');
const KycLinkRouter = require('./routes/admin/kycLinks-routes');
const AddImageRouter = require('./routes/admin/addImage-routes');















// Load environment variables from .env file
require('dotenv').config();

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Mongodb connected'))
.catch((error) => console.log(error));

const app = express();

const PORT = process.env.PORT || 3000;


app.use(
    cors(
        {
        // origin: process.env.CLIENT_BASE_URL,
        origin: "http://localhost:5173"||"http://localhost:5174",
        // origin:"*", 
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials: true
    }
)
);

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth',authRouter);
app.use('/api/attendance',attendanceRouter);
app.use('/api/leave-application',leaveRouter);
app.use('/api/resignation',ResignationRouter);
app.use("/api/admin/warning", WarningRouter);
app.use("/api/admin/terminate", TerminateRouter);

app.use("/api/teleleader/adddata", AdddataRouter);
app.use("/api/teleleader/assignpackage", AssignPackageRouter);



app.use("/api/admin/services", ServicesRouter);
app.use("/api/admin/packages", PackagesRouter);
app.use("/api/admin/kyc-links", KycLinkRouter);
app.use("/api/admin/addImage", AddImageRouter);











app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));