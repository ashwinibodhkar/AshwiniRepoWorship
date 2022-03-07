  
import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu"
import Avatar from "@material-ui/core/Avatar"
import FavouriteIcon from "@material-ui/icons/Favorite"
import HomeIcon from "@material-ui/icons/Home"
import AboutArtistIcon from "@material-ui/icons/AccountCircle"
import CategoryIcon from "@material-ui/icons/LibraryBooks"
import ContactIcon from "@material-ui/icons/Feedback"
import PersonIcon from "@material-ui/icons/Person"
import { Link } from "gatsby"
import "./drawercss.css"

import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from "react"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false,
  })

  let currentUser;
  let logout;
  let realUser = useContext(AuthContext)
  
  if(realUser){
    currentUser = realUser.currentUser
    logout = realUser.logout
  }

  	async function signOut(){
		try {
			await logout()
			console.log("Logged out")
		} catch (error) {
		console.log("Logged out error: ",error)
		}
	}

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
		{currentUser && 
			<List className="userProfile pt-5">
				<ListItem>
					<Avatar>{currentUser.photoURL}</Avatar>
				</ListItem>
				<ListItem>
					<h5>{currentUser.displayName}</h5>
				</ListItem>
			</List>
		}
    
		{!currentUser && 
			<List className="userProfile pt-5">
				<ListItem>
					<Avatar>U</Avatar>
				</ListItem>
				<ListItem>
					<h5>Guest</h5>
				</ListItem>
			</List>
		}
      <Divider />

      <List>
        <Link to="/user/favourites">
          <ListItem>
            <ListItemIcon>
              <FavouriteIcon />
            </ListItemIcon>
            <ListItemText>Your Favourites</ListItemText>
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>

        <Link to="/artist">
          <ListItem>
            <ListItemIcon>
              <AboutArtistIcon />
            </ListItemIcon>
            <ListItemText>About Artist</ListItemText>
          </ListItem>
        </Link>

        <Link to="/category">
          <ListItem>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItem>
        </Link>

        <Link to="/contact">
          <ListItem>
            <ListItemIcon>
              <ContactIcon />
            </ListItemIcon>
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
        </Link>

		{currentUser &&
			<ListItem>
				<ListItemIcon>
				<PersonIcon />
				</ListItemIcon>
				<ListItemText onClick={signOut}>Log Out</ListItemText>
			</ListItem>
		}

		{!currentUser &&
		
			<Link to="/user/login">
			<ListItem>
				<ListItemIcon>
				<PersonIcon />
				</ListItemIcon>
				<ListItemText>Log In</ListItemText>
			</ListItem>
			</Link>
		}
      </List>
    </div>
  )

  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor} className="drawerButton">
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "#fff " }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="drawerBg"
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
