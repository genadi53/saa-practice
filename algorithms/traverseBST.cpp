truct elem
   {char key; elem *left, *right;} *root=NULL;


void preorder(elem *t)
{
  if (t)
    {
     cout<<t->key<<" ";
     preorder(t->left);
     preorder(t->right);
    }
}


void inorder(elem *t)
{
  if (t)
    {
     inorder(t->left);
     cout<<t->key<<" ";
     inorder(t->right);
    }
}

void postorder(elem *t)
{
  if (t)
    {
     postorder(t->left);
     postorder(t->right);
     cout<<t->key<<" ";
    }
}	