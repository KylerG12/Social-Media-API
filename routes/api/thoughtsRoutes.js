const router = require('express').Router();

const {createThought,
       getThoughts,
       getSingleThought,
       updateThought,
       deleteThought,
       addReaction,
       deleteReaction } = require('../../controllers/thoughtControllers')

router.route('/').post(createThought).get(getThoughts)
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)
router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;