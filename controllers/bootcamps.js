// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Show all boot camps"
    })
}

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show bootcamp ${req.params.id}`
    })
}

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Create new bootcamp"
    })
}

// @desc        Update a boot camp
// @route       PUT /api/v1/bootcamps
// @access      Public
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    })
}

// @desc        Delete a bootcamp
// @route       Delete /api/v1/bootcamps
// @access      Public
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    })
}