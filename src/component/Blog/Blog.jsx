import PropTypes from 'prop-types';

const Blog = ({blog,handleCart}) => {
    const {recipe_name, recipe_image, id, short_description, ingredients, preparing_time, calories } = blog;
    return (
        <div className='p-2'>
            
            <img src={recipe_image} alt="foofd image" />
            <h1 className='text-4xl'>{recipe_name}</h1>
            <h2>{short_description}</h2>
            <h1 className='font-bold'>Ingredients :{ingredients}</h1>
            <div className='flex gap-6'>
                <div className='flex'>
                <img src="/image/Vector.png" alt="" /> 
                <p>{preparing_time}</p>
                </div>
                <div className='flex'>
                    <img src="/image/Frame.png" alt="" />
                    <p>{calories}</p>
                </div>
            </div>
            <button  className="btn btn-success">Want to Cook</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;