//selectors
import {createSelector} from 'reselect'

const filtersGetter=state=>state.filters
const artcilesGetter=state=>state.articles
const commentsGetter=state=>state.comments
const idGetter=(state,props)=>props.id

export const filtrateArtcilesSelector=createSelector(artcilesGetter,filtersGetter,(articles,filters)=>{
	const {selected,dateRange}=filters
	const {from,to}=dateRange
	return articles.filter(article=>{
		const published=Date.parse(article.date)
		console.log('selected:',selected.includes(article.id))
		console.log('published > from',published > from, 'for article:',article.title)
		console.log('published <to',published <to, 'for article:',article.title)
		console.log('from:',from)
		console.log('to:',to)
		return(!selected.length || selected.includes(article.id)) &&
		(!from || !to || (published > from && published <to))
	})
})

export const commentSelectorFactory=()=>createSelector(commentsGetter,idGetter,(comments,id)=>{
	
	return comments[id]
})

/*
lesson 7
import {createSelector} from 'reselect'

const filtersGetter=state=>state.filters
const artcilesGetter=state=>state.articles
const commentsGetter=state=>state.comments
const idGetter=(state,props)=>props.id

export const filtrateArtcilesSelector=createSelector(artcilesGetter,filtersGetter,(articles,filters)=>{
	const {selected,dateRange}=filters
	const {from,to}=dateRange
	return articles.filter(article=>{
		const published=Date.parse(article.date)
		console.log('selected:',selected.includes(article.id))
		console.log('published > from',published > from, 'for article:',article.title)
		console.log('published <to',published <to, 'for article:',article.title)
		console.log('from:',from)
		console.log('to:',to)
		return(!selected.length || selected.includes(article.id)) &&
		(!from || !to || (published > from && published <to))
	})
})

export const commentSelectorFactory=()=>createSelector(commentsGetter,idGetter,(comments,id)=>{
	
	return comments[id]
})
*/	
	
/*
lesson 5 before (1:07)
export const commentSelector=createSelector(commentsGetter,idGetter,(comments,id)=>{
	return comments.find(comment=>comment.id===id)
})
	
*/



/*
export function filtrateArticles({filters,articles}){
	const {selected,dateRange}=filters
	const {from,to}=dateRange
	
	return articles.filter(article=>{
		const published=Date.parse(article.date)
		console.log('selected:',selected.includes(article.id))
		console.log('published > from',published > from, 'for article:',article.title)
		console.log('published <to',published <to, 'for article:',article.title)
		console.log('from:',from)
		console.log('to:',to)
		return(!selected.length || selected.includes(article.id)) &&
		(!from || !to || (published > from && published <to))
	})

}
*/